'use client';

import { CourseCard } from '@/components/CourseCard';
import { ChatInterface } from '@/components/ChatInterface';
import { useState } from 'react';
import { courses as csCourses } from '@/lib/cs-courses';
import { myTakenCourses, myDesiredCourses } from '@/lib/cs-courses';

interface Course {
    id: string;
    code: string;
    name: string;
    credits: number;
    description: string;
}

export default function AvailableCourses() {
    // Dummy data - replace with actual API call
    const courses = myDesiredCourses.map((courseId) => {
        return {
            id: courseId,
            code: courseId,
            name: csCourses[courseId].description,
            credits: csCourses[courseId].credits,
        }
    })

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Course List Section */}
                    <div className="lg:col-span-2">
                        <div className="grid gap-4">
                            {courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    code={course.code}
                                    name={course.name}
                                    credits={course.credits}
                                />
                            ))}
                        </div>
                    </div>

                    {/* AI Chat Section */}
                    <ChatInterface />
                </div>
            </div>
        </div>
    );
}