import { Component, OnInit } from '@angular/core';
import { Test, Question, Option } from '@app/models';
import { TestService } from '@app/services';

@Component({
  selector: 'app-test-editor',
  templateUrl: './test-editor.component.html',
  styleUrls: ['./test-editor.component.css']
})
export class TestEditorComponent implements OnInit {

  tests: Test[];

  editingNew: boolean = false;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(displayWarning: boolean = false) {
    if (displayWarning) {
      let f = confirm('Warning! Unsaved changes will be lost if you reload.');
      if (!f) {
        return;
      }
    }

    this.editingNew = false;
    this.tests = null;
    this.testService.getAll().subscribe(data => {
      this.tests = data;
    });
  }

  addTest() {
    let name = prompt('Enter new test\'s name:', 'New Test');
    if (name) {
      let test = new Test(name);
      this.tests.push(test);
      this.editingNew = true;
    }
  }

  addQuestion(test: Test) {
    let text = prompt('Enter new question\'s text:', 'New Question');
    if (text) {
      let question = new Question(text);
      test.questions = test.questions || [];
      test.questions.push(question);
    }
  }

  addOption(question: Question) {
    let text = prompt('Enter new answer\'s text:', 'New Answer');
    if (text) {
      let option = new Option(text);
      question.options = question.options || [];
      question.options.push(option);
    }
  }

  saveTest(test: Test) {
    let request = (test.id) ? this.testService.update(test) : this.testService.create(test);
    request.subscribe(
      data => {
        this.reload()
      },
      error => {
        alert('Failed to save changes to this test');
      }
    );
  }

  deleteTest(test: Test) {
    let f = confirm('Are you sure to delete this test?');
    if (!f) {
      return;
    }

    if (test.id) {
      this.testService.delete(test.id).subscribe(
        data => {
          this.reload();
        },
        error => {
          alert('Failed to delete this test');
        }
      )
    }
    else {
      let index = this.tests.indexOf(test);
      this.tests.splice(index, 1);
      this.editingNew = false;
    }
    
  }

  deleteQuestion(test: Test, question: Question) {
    let f = confirm('Are you sure to delete this question?');
    if (!f) {
      return;
    }

    if (test.id) {
      question.state = -1;
    }
    else {
      let index = test.questions.indexOf(question);
      test.questions.splice(index, 1);
    }
  }

  deleteOption(test: Test, question: Question, option: Option) {
    let f = confirm('Are you sure to delete this answer?');
    if (!f) {
      return;
    }

    if (test.id) {
      option.state = -1;
    }
    else {
      let index = question.options.indexOf(option);
      question.options.splice(index, 1);
    }
  }
}
