import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Test } from '../../models';
import { tests } from '../tests';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests: Test[] = tests;

  //@Input()
  testModel: Test;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.testModel = this.tests.find(t => t.id == +params.get('id'));
    });
  }

}
