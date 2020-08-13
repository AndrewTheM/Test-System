import { Component } from '@angular/core';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-system';
  questions: Question[] = [
    new Question("Why are you gay?", [ "No u", "Who says I'm gay?", "stfu" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ]),
    new Question("You are gay.", [ "Your mom", "Nah fam, straight af", "YES, I AM!" ])
  ];
}
