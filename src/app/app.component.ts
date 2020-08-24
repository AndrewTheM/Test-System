import { Component } from '@angular/core';
import { AuthenticationService } from './services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-system';

  constructor(private authService: AuthenticationService,
              private router : Router) {

  }

  public get isAdmin() : boolean {
    return this.authService.userValue?.role == 'Admin';
  }

  public get notFound(): boolean {
    return this.router.url == '/not-found';
  }
  
}
