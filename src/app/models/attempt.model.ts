export class Attempt {
    id: number;
    points: number;
    completed: Date;
    testId: number;
    userId: string;

    constructor(points: number, completed: Date, testId: number, userId: string) {
        this.points = points;
        this.completed = completed;
        this.testId = testId;
        this.userId = userId;
    }
}