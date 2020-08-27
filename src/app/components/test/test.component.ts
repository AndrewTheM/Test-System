import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Test, Question, Attempt } from '@app/models';
import { TestService, AuthenticationService } from '@app/services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  testModel: Test;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private testService: TestService,
              private authService: AuthenticationService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.testService.get(id).subscribe(data => {
        this.testModel = data;
      });
    });
  }

  onAnswerChange(answerIds: number[], question: Question) {
    question.options.forEach(option => {
      option.selected = answerIds.includes(option.id);
    });
  }

  finishTest() {
    let f = confirm('Are you sure to finish the test?');
    if (!f) {
      return;
    }

    let totalPoints = 0, earnedPoints = 0;

    this.testModel.questions.forEach(q => {
      totalPoints += q.points;

      let f1 = q.options.filter(op => op.correct).every(op => op.selected);
      let f2 = q.options.filter(op => !op.correct).every(op => !op.selected);
      if (f1 && f2) {
        earnedPoints += q.points;
      }
    });

    let attempt = new Attempt(earnedPoints, new Date(), this.testModel.id, this.authService.userValue.id);
    this.testService.postAttempt(attempt).subscribe(
      data => {
        let percent = Math.round(earnedPoints / totalPoints * 100);
        alert(`Your result: ${earnedPoints}/${totalPoints} (${percent}%)`);
        this.router.navigate(['/tests']);
      },
      error => {
        alert('Failed to finish the test. PLease, try again later.');
      }
    )
  }
}
