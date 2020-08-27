import { Option } from './';

export class Question {
    id: number;
    text: string;
    points: number;
    options: Option[];
    multiple: boolean;
    image: any[];

    constructor(text: string, options: Option[], points: number, multiple: boolean = false, image: any[] = null) {
        this.text = text;
        this.options = options;
        this.points = points;
        this.image = image;
        this.multiple = multiple;
    }
}