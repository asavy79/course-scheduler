"use client";
import CourseCard from "@/components/course-card";
import { myTakenCourses, myDesiredCourses, courses } from "@/lib/cs-courses";
import { useState } from "react";

export default function Courses() {
    const [displayCount, setDisplayCount] = useState(6); // Show 6 courses initially
    const initialDisplayCount = 6; // New constant for initial count

    for (const courseCode of myTakenCourses) {
        console.log(courses[courseCode].description);
    }

    const completedCourses = myTakenCourses.map((courseCode) => ({
        id: courseCode,
        code: courseCode,
        name: courses[courseCode].description,
        grade: "A",
        semester: "Fall 2023",
        credits: courses[courseCode].credits
    }));

    const plannedCourses = myDesiredCourses.map((courseCode) => ({
        id: courseCode,
        code: courseCode,
        name: courses[courseCode].description,
        semester: "Future",
        credits: courses[courseCode].credits
    }));

    const displayedCompletedCourses = completedCourses.slice(0, displayCount);
    const displayedPlannedCourses = plannedCourses.slice(0, displayCount);

    const handleLoadMore = () => {
        setDisplayCount(prevCount => prevCount + 6);
    };

    const handleShowLess = () => {
        setDisplayCount(initialDisplayCount);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Courses</h1>
            
            {/* Completed Courses Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Completed Courses</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {displayedCompletedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="mt-6 text-center">
                    {completedCourses.length > displayCount ? (
                        <button
                            onClick={handleLoadMore}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            See More
                        </button>
                    ) : displayCount > initialDisplayCount && (
                        <button
                            onClick={handleShowLess}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </section>

            {/* Planned Courses Section */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Planned Courses</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {displayedPlannedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="mt-6 text-center">
                    {plannedCourses.length > displayCount ? (
                        <button
                            onClick={handleLoadMore}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Load More Courses
                        </button>
                    ) : displayCount > initialDisplayCount && (
                        <button
                            onClick={handleShowLess}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </section>
        </div>
    );
}