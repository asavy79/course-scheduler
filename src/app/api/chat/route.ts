import { NextResponse } from 'next/server';
import { generateCourseRecommendations } from '@/lib/chatgpt';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { question } = body;

        const response = await generateCourseRecommendations({
            name: "User", // You might want to make these configurable
            major: "Computer Science",
            degree: "Bachelor's",
            courseHistory: ["CS101", "CS102"],
            question: question
        });

        return NextResponse.json({ response });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
} 