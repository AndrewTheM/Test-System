import { Option } from './';

export class Question {
    id: number;
    text: string;
    options: Option[];
    multiple: boolean;
    image: any[];

    constructor(text: string, options: Option[], multiple: boolean = false, image: any[] = null) {
        this.text = text;
        this.options = options;
        this.image = image;
        this.multiple = multiple;
    }
}