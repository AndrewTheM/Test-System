import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Test, Attempt } from '@app/models';
import { TestService, AuthenticationService, CompletionService } from '@app/services';

@Component({
    selector: 'app-tests-page',
    templateUrl: './tests-page.component.html',
    styleUrls: ['./tests-page.component.css']
})
export class TestsPageComponent implements OnInit {

    tests: Test[];
    attempts: Attempt[];

    constructor(private router: Router,
                private testService: TestService,
                private completionService: CompletionService,
                public authService: AuthenticationService) { }

    ngOnInit(): void {
        this.tests = null;
        this.testService.getAll().subscribe(data => {
            this.tests = data;
        });

        const currentUser = this.authService.userValue;
        if (currentUser) {
            this.completionService.getAll(currentUser.id).subscribe(data => {
                this.attempts = data;
            });
        }
    }

    public get isAdmin(): boolean {
        return this.authService.userValue?.role === 'Admin';
    }

    clearAttempts(): void {
        if (!this.isAdmin) {
            return;
        }

        const f = confirm('Are you sure to clear your attempts?');
        if (!f) {
            return;
        }

        const userId = this.authService.userValue.id;
        this.completionService.clearUser(userId).subscribe(
            data => {
                this.attempts = data;
                alert('Your attempts have been cleared successfully');
            },
            error => {
                alert('Failed to clear your attempts');
            }
        );
    }

    openTest(id: number): void {
        const test = this.tests.find(t => t.id === id);
        if (!test.questions || test.questions.length === 0) {
            alert('There are no questions in this test');
            return;
        }

        if (this.attempts === undefined) {
            const response = confirm('Only authorized users can attempt the test.\nWould you like to log in?');
            if (response) {
                this.router.navigate(['/login'], { queryParams: { returnUrl: '/tests' } });
            }
            return;
        }

        const testAttempts = this.attempts.filter(at => at.testId === id);
        let triesLeft: any;

        if (test.tries > 0) {
            triesLeft = test.tries - testAttempts.length;

            if (triesLeft === 0) {
                const bestAttempt = testAttempts.sort((a, b) => b.points - a.points)[0];
                let testTotal = 0;
                test.questions.forEach(q => testTotal += q.points);
                const percent = Math.round(bestAttempt.points / testTotal * 100);

                alert(`You have no tries left.\nYour best score: ${bestAttempt.points}/${testTotal} (${percent}%)`);
                return;
            }
        }
        else {
            triesLeft = 'unlimited';
        }

        const timeLimit = (test.minutes === 0) ? 'unlimited time' : `${test.minutes} minutes`;
        const f = confirm(`You have ${triesLeft} tries left for this test.\n` +
                          `You have had ${testAttempts.length} attempts so far.\n` +
                          `You will have ${timeLimit} to complete it.\n` +
                          'Do you want to start?');

        if (f) {
            this.router.navigate(['/tests', id]);
        }
    }
}
