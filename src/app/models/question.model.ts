export class Question {
    //id: number;
    text: string;
    options: string[];
    multipleChoicesEnabled: boolean;

    constructor(text: string, options: string[], multipleChoicesEnabled: boolean = false) {
        this.text = text;
        this.options = options;
        this.multipleChoicesEnabled = multipleChoicesEnabled;
    }
}