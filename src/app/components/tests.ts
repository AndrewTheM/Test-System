import { Test, Question } from '../models';

export const tests: Test[] = [
    new Test(25431, "Ugandan Homosexuals", [
      new Question("Why are you gay?", [ "No u", "Who says I'm gay?" ]),
      new Question("You are gay.", [ "Ur mom", "YES, I AM!", "What shows that I'm gay?" ]),
      new Question("How can I decribe you?", [ "Gay rights activist", "Lesbian", "Homosexual", "Transgenda" ], true),
      new Question("Why should someone be gay?", [ "Kinda cool", "It's a JoJo reference", "You tell me" ]),
      new Question("So who is gay?", [ "Joe" ])
    ]),
    new Test(25432, "Кіт", [
      new Question("Ти маму мав?", [ "Мав" ]),
      new Question("А тата мав?", [ "Мав" ]),
      new Question("А брата мав?", [ "Мав" ])
    ]),
    new Test(25433, "Новоніколаївка, міліція", [
      new Question("Скільки годин?", [ "Дев'ять годин", "Десять годин" ]),
      new Question("Скільки?", [ "Десять", "Дев'ять" ]),
      new Question("Дев'ять?", [ "Ні", "Десять", "Да" ]),
      new Question("Десять?", [ "да", "ДА!", "ДААА!!!!" ], true),
      new Question("Ой, не чує баба, глуха як тетеря", [ "Я", "вже", "поняв" ], true),
      new Question("Ну спасібо.", [ "Досвіданія." ])
    ])
  ];