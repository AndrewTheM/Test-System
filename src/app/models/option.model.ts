export class Option {
    id: number;
    text: string;
    correct: boolean;
    image: any[];

    selected: boolean = false;

    constructor(text: string, correct: boolean = false, image: any[] = null) {
        this.text = text;
        this.correct = correct;
        this.image = image;
    }
}