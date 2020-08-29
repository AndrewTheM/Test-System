import { Option } from './';

export class Question {
    id: number;
    text: string;
    points: number;
    options: Option[];
    multiple: boolean;
    image: any[];

    state: number = 0;

    constructor(text: string, options: Option[] = [], points: number = 1, multiple: boolean = false, image: any[] = []) {
        this.text = text;
        this.options = options;
        this.points = points;
        this.image = image;
        this.multiple = multiple;
    }
}