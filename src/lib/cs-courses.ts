// Define types for better structure
export type CourseId = string;

export interface Course {
    prerequisites: CourseId[];
    corequisites: CourseId[];
    description: string;
    credits: number;
}

// Separate the taken and desired courses
export const myTakenCourses: CourseId[] = [
    "CSCI 2270",
    "MATH 1300",
    "CSCI 2824",
    "CSCI 2820",
    "CSCI 1300",
    "CSCI 3022",
    "CSCI 3104",
    "CSCI 3287"
];

export const myDesiredCourses: CourseId[] = [
    "CSCI 3202",
    "CSCI 3832",
    "CSCI 4240"
];

// Group courses by department for easier maintenance
export const courses: Record<CourseId, Course> = {
    // CS Core courses
    "CSCI 1300": {
        "prerequisites": [],
        "corequisites": [],
        "description": "Computer Science 1: Starting Computing",
        "credits": 4
    },
    "CSCI 2820": {
        "prerequisites": ["CSCI 2270", "MATH 2300"],
        "corequisites": [],
        "description": "Linear Algebra with Computer Science Applications",
        "credits": 3
    },
    "CSCI 2824": {
        "prerequisites": ["CSCI 1300", "MATH 1300"],
        "corequisites": [],
        "description": "Discrete Structures",
        "credits": 4
    },
    "MATH 1300": {
        "prerequisites": [],
        "corequisites": [],
        "description": "Calculus 1",
        "credits": 5
    },
    "MATH 2300": {
        "prerequisites": ["MATH 1300"],
        "corequisites": [],
        "description": "Calculus 2",
        "credits": 5
    },
    "CSCI 2270": {
        "prerequisites": ["CSCI 1300", "MATH 1300"],
        "corequisites": [],
        "description": "Computer Science 2: Data Structures",
        "credits": 4
    },
    "CSCI 2400": {
        "prerequisites": ["CSCI 1300", "CSCI 2270"],
        "corequisites": [],
        "description": "Computer Systems",
        "credits": 4
    },
    "CSCI 3104": {
        "prerequisites": ["CSCI 2270", "CSCI 1300"],
        "corequisites": [],
        "description": "Algorithms",
        "credits": 4
    },
    "CSCI 3155": {
        "prerequisites": ["CSCI 2270", "CSCI 2400", "CSCI 2824"],
        "corequisites": [],
        "description": "Principles of Programming Languages",
        "credits": 4
    },
    "CSCI 3022": {
        "prerequisites": ["CSCI 2270", "MATH 2300", "CSCI 2824"],
        "corequisites": [],
        "description": "Introduction to Data Science with Probability and Statistics",
        "credits": 3
    },
    "CSCI 3308": {
        "prerequisites": ["CSCI 2270"],
        "corequisites": [],
        "description": "Software Development Methods and Tools",
        "credits": 3
    },
    "CSCI 3753": {
        "prerequisites": ["CSCI 2400", "CSCI 2270"],
        "corequisites": [],
        "description": "Design and Analysis of Operating Systems",
        "credits": 4
    },
    "CSCI 3832": {
        "prerequisites": ["CSCI 2824", "CSCI 2270"],
        "corequisites": [],
        "description": "Natural Language Processing",
        "credits": 3
    },
    "CSCI 3202": {
        "prerequisites": ["CSCI 2270", "CSCI 2824", "CSCI 3022"],
        "corequisites": [],
        "description": "Introduction to Artificial Intelligence",
        "credits": 3
    },
    "CSCI 4622": {
        "prerequisites": ["CSCI 2270", "CSCI 2820", "CSCI 2824", "CSCI 3022"],
        "corequisites": [],
        "description": "Machine Learning",
        "credits": 3
    },
    "CSCI 4022": {
        "prerequisites": ["CSCI 2820", "CSCI 3022"],
        "corequisites": [],
        "description": "Advanced Data Science",
        "credits": 3
    },
    "CSCI 4448": {
        "prerequisites": ["CSCI 3308"],
        "corequisites": [],
        "description": "Object-Oriented Analysis and Design",
        "credits": 3
    },
    "CSCI 4555": {
        "prerequisites": ["CSCI 3155"],
        "corequisites": [],
        "description": "Compiler Construction",
        "credits": 3
    },
    "CSCI 4240": {
        "prerequisites": ["CSCI 2270", "CSCI 2824"],
        "corequisites": [],
        "description": "Introduction to Blockchain",
        "credits": 3
    },
    "CSCI 4273": {
        "prerequisites": ["CSCI 3753"],
        "corequisites": [],
        "description": "Network Systems",
        "credits": 3
    },
    "CSCI 3287": {
        "prerequisites": ["CSCI 2270"],
        "corequisites": [],
        "description": "Design and Analysis of Database Systems",
        "credits": 3
    }
}

