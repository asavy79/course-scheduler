import { Course } from '@/types/course';
import { CourseCard } from './CourseCard';

interface CourseListProps {
    courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
    return (
        <div className="grid gap-4">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    code={course.code}
                    name={course.name}
                    credits={course.credits}
                    description={course.description}
                />
            ))}
        </div>
    );
} 