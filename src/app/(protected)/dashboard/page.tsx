"use client";
import { useSession } from "next-auth/react";
import DashboardCard from "@/components/dashboard-card";

export default function Dashboard() {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="px-6 py-8 bg-white shadow-sm flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome back, {session.user?.name || 'User'}!
                </h1>
                <p className="mt-2 text-gray-600">Track your degree progress and plan your academic journey.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
                <DashboardCard 
                    title="Credits Completed" 
                    value="45/120" 
                    description="Credit Hours" 
                    color="blue" 
                    href="/progress" 
                />
                <DashboardCard 
                    title="Major Requirements" 
                    value="8/15" 
                    description="Courses completed" 
                    color="green" 
                    href="/requirements" 
                />
                <DashboardCard 
                    title="Prerequisites Met" 
                    value="12" 
                    description="New courses available" 
                    color="purple" 
                    href="/available-courses" 
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-8">
                {/* Degree Progress */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Degree Progress</h2>
                    <div className="space-y-4">
                        {[
                            { name: "Core Requirements", progress: "75%", color: "blue" },
                            { name: "Major Requirements", progress: "53%", color: "green" },
                            { name: "Electives", progress: "30%", color: "purple" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className={`w-2 h-2 rounded-full bg-${item.color}-500 mr-3`}></div>
                                <div className="flex-1">
                                    <p className="text-gray-800">{item.name}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div 
                                            className="bg-blue-500 h-2.5 rounded-full origin-left animate-[progressBar_1s_ease-in-out]" 
                                            style={{ width: item.progress }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="ml-2 text-gray-600">{item.progress}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Available Courses */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Available Courses</h2>
                        <a 
                            href="/available-courses" 
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                            Explore More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="space-y-4">
                        {[
                            { code: "CS301", name: "Data Structures", prereqs: "CS201" },
                            { code: "CS401", name: "Algorithms", prereqs: "CS301" },
                            { code: "MATH201", name: "Linear Algebra", prereqs: "MATH101" }
                        ].map((course, i) => (
                            <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="min-w-[3rem] h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                                    <span className="font-semibold text-sm px-2">{course.code}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-800 font-medium truncate">{course.name}</p>
                                    <p className="text-sm text-gray-500 truncate">Prereq: {course.prereqs}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}