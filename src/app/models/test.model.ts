import { Question } from "./";

export class Test {
    id: number;
    name: string;
    category: string;
    tries: number;
    minutes: number;
    questions: Question[];

    constructor(id: number,
                name: string,
                category: string,
                tries: number,
                minutes: number,
                questions: Question[]) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.tries = tries;
        this.minutes = minutes;
        this.questions = questions;
    }
}