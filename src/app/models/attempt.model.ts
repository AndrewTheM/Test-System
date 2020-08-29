export class Attempt {
    id: number;
    points: number;
    max: number;
    completed: Date;
    testId: number;
    userId: string;

    constructor(points: number, max: number, completed: Date, testId: number, userId: string) {
        this.points = points;
        this.max = max;
        this.completed = completed;
        this.testId = testId;
        this.userId = userId;
    }
}