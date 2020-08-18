import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
