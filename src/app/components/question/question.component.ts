import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionModel: Question;

  @Output() answerChosen = new EventEmitter<number[]>();

  chosenAnswers: number[];

  constructor() {
    this.chosenAnswers = [];
  }

  ngOnInit(): void {
  }

  changeAnswer(event: any) {
    if (event.checked) {
      this.chosenAnswers.push(+event.source.value);
    }
    else {
      let index = this.chosenAnswers.indexOf(+event.source.value);
      this.chosenAnswers.splice(index, 1);
    }

    this.answerChosen.emit(this.chosenAnswers);
  }

  setAnswer(event: any) {
    this.chosenAnswers = [ +event.source.value ];
    this.answerChosen.emit(this.chosenAnswers);
  }

}
