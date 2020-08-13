export class Question {
    id: number;
    text: string;
    options: string[];

    constructor(text: string, options: string[]) {
        this.text = text;
        this.options = options;
    }
}