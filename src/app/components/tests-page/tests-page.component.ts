import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { tests } from '../tests';
import { Router } from '@angular/router';

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
