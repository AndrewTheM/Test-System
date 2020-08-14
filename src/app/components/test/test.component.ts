import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { Test } from '../../models/test.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //@Input()
  testModel: Test;

  tests: Test[] = [
    new Test("Ugandan Homosexuals", [
      new Question("Why are you gay?", [ "No u", "Who says I'm gay?" ]),
      new Question("You are gay.", [ "Ur mom", "YES, I AM!", "What shows that I'm gay?" ]),
      new Question("How can I decribe you?", [ "Gay rights activist", "Lesbian", "Homosexual", "Transgenda" ]),
      new Question("Why should someone be gay?", [ "Kinda cool", "It's a JoJo reference", "You tell me" ]),
      new Question("So who is gay?", [ "Joe" ])
    ]),
    new Test("Кіт", [
      new Question("Ти маму мав?", [ "Мав" ]),
      new Question("А тата мав?", [ "Мав" ]),
      new Question("А брата мав?", [ "Мав" ])
    ]),
  ];

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.testModel = this.tests[+params.get('id')]
    });
  }

}
