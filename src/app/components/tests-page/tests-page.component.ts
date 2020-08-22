import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Test } from '@app/models';
import { TestService } from '@app/services';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css']
})
export class TestsPageComponent implements OnInit {

  tests: Test[];

  constructor(private router: Router,
              private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getAll().subscribe(data => {
      this.tests = data;
    });
  }

  openTest(id: number) : void {
    this.router.navigate(['/tests', id]);
  }

}
