import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Test, Question } from '@app/models';
import { TestService } from '@app/services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  testModel: Test;

  constructor(private route: ActivatedRoute,
              private testService: TestService) { }
  
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
    let totalPoints = 0, earnedPoints = 0;

    this.testModel.questions.forEach(question => {
      question.options.forEach(option => {
        totalPoints += option.points;

        if (option.correct && option.selected) {
          earnedPoints += option.points;
        }
      });
    });

    alert(`${earnedPoints}/${totalPoints}`);
  }
}
