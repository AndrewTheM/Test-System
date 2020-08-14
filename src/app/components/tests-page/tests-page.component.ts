import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css']
})
export class TestsPageComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
