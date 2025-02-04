type Course = {
    id: string;
    code: string;
    grade: string;
    name: string;
    semester: string;
    credits: number;
}

export default function CourseCard({course}: {course: Course}) {
    return (
        <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-blue-600">{course.code}</span>
            <span className="text-sm font-medium text-green-600">{course.grade}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{course.name}</h3>
        <p className="text-sm text-gray-500">{course.semester}</p>
    </div>
    )
}