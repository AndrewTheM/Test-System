import { Component } from '@angular/core';
import { Test } from './models/test.model';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-system';

  test: Test = new Test("Ugandan Homosexuals", [
    new Question("Why are you gay?", [ "No u", "Who says I'm gay?" ]),
    new Question("You are gay.", [ "Ur mom", "YES, I AM!", "What shows that I'm gay?" ]),
    new Question("How can I decribe you?", [ "Gay rights activist", "Lesbian", "Homosexual", "Transgenda" ]),
    new Question("Why should someone be gay?", [ "Kinda cool", "It's a JoJo reference", "You tell me" ]),
    new Question("So who is gay?", [ "Joe" ])
  ]);
}
