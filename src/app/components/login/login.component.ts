import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernameField: FormControl;
  passwordField: FormControl;

  returnUrl: string;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
                
    if (this.authenticationService.userValue) { 
        this.router.navigate(['/']);
        return;
    }

    this.usernameField = new FormControl('', [Validators.required]);
    this.passwordField = new FormControl('', [Validators.required]);
    this.loginForm = this.formBuilder.group({
      username: this.usernameField,
      password: this.passwordField
    });

}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  changeVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  get f() {
    return this.loginForm.controls;
  }

  submitCredentials() {
    if (this.loginForm.invalid)
      return;

    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
              alert('Login failed!');
            });
  }
}
