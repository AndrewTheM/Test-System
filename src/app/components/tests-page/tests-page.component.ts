import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Test } from '../../models';
import { tests } from '../tests';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css']
})
export class TestsPageComponent implements OnInit {

  tests: Test[] = tests;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openTest(id: number) : void {
    this.router.navigate(['/tests', id]);
  }

}
