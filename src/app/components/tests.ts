import { Test } from '../models/test.model';
import { Question } from '../models/question.model';

export const tests: Test[] = [
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
    new Test("Новоніколаївка, міліція", [
      new Question("Скільки годин?", [ "Дев'ять годин", "Десять годин" ]),
      new Question("Скільки?", [ "Десять", "Дев'ять" ]),
      new Question("Дев'ять?", [ "Ні", "Десять", "Да" ]),
      new Question("Десять?", [ "да", "ДА!", "ДААА!!!!" ]),
      new Question("Ой, не чує баба, глуха як тетеря", [ "Я", "вже", "поняв" ]),
      new Question("Ну спасібо.", [ "Досвіданія." ])
    ])
  ];