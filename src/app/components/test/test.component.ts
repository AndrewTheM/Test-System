import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Test } from '@app/models';
import { TestService } from '@app/services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  testModel: Test;

  constructor(private route: ActivatedRoute,
              private testService: TestService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.testService.get(id).subscribe(data => {
        this.testModel = data;
      });
    });
  }

}
