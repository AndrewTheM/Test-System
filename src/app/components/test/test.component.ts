import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { Test } from '../../models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() testModel: Test;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
