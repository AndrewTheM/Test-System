export class Option {
    id: number;
    text: string;
    points: number;
    correct: boolean;
    image: any[];

    constructor(text: string, correct: boolean = false, points: number = 1, image: any[] = null) {
        this.text = text;
        this.correct = correct;
        this.points = points;
        this.image = image;
    }
}