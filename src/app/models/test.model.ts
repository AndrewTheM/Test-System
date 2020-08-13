import { Question } from "./question.model";

export class Test {
    name: string;
    questions: Question[];

    constructor(name: string, questions: Question[]) {
        this.name = name;
        this.questions = questions;
    }
}