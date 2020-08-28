import { Question } from "./";

export class Test {
    id: number;
    name: string;
    category: string;
    tries: number;
    minutes: number;
    questions: Question[];

    constructor(name: string,
                category: string = '',
                tries: number = 0,
                minutes: number = 0,
                questions: Question[] = []) {
        this.name = name;
        this.category = category;
        this.tries = tries;
        this.minutes = minutes;
        this.questions = questions;
    }
}