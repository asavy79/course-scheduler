import { courses } from "./cs-courses";


const myCourse = courses["CSCI 1300"];

export interface Course {
    prerequisites: string[];
    corequisites: string[];
    description: string;
    credits: number;
}