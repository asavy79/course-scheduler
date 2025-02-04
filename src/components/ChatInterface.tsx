'use client';

import { useState } from 'react';

export function ChatInterface() {
    const [chatMessage, setChatMessage] = useState('');
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!chatMessage.trim()) return;

        // Add user message to chat
        const userMessage = { role: 'user' as const, content: chatMessage };
        setMessages(prev => [...prev, userMessage]);
        setChatMessage('');
        setIsLoading(true);

        try {
            // Get response from API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: chatMessage })
            });

            const data = await response.json();

            // Add assistant response to chat
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: data.response || 'No response received.' 
            }]);
        } catch (error) {
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'Sorry, there was an error processing your request.' 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Recommendations</h2>
            <div className="flex flex-col h-[500px]">
                <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
                    {messages.length === 0 ? (
                        <p className="text-gray-600 text-sm">
                            Ask me about course recommendations based on your academic history!
                        </p>
                    ) : (
                        messages.map((message, index) => (
                            <div 
                                key={index} 
                                className="mb-4 pl-4"
                            >
                                <p className="font-semibold">
                                    {message.role === 'user' ? 'You' : 'Assistant'}:
                                </p>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                    {message.content}
                                </p>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className="text-gray-500 italic">Thinking...</div>
                    )}
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                        onClick={handleSendMessage}
                        disabled={isLoading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
} 