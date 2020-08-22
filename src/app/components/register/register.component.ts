import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hidePassword: boolean = true;

  registerForm: FormGroup;
  usernameField: FormControl;
  passwordField: FormControl;
  confirmPasswordField: FormControl;
  emailField: FormControl;
  firstNameField: FormControl;
  lastNameField: FormControl;

  constructor(private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) {

    if (this.authService.userValue) {
      this.router.navigate(['/']);
      return;
    }

    this.usernameField = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]);
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]);
    this.confirmPasswordField = new FormControl('', [Validators.required]);
    this.emailField = new FormControl('', [Validators.email]);
    this.firstNameField = new FormControl('', [Validators.required]);
    this.lastNameField = new FormControl('', [Validators.required]);

    this.registerForm = this.formBuilder.group({
      username: this.usernameField,
      password: this.passwordField,
      confirm: this.confirmPasswordField,
      email: this.emailField,
      firstName: this.firstNameField,
      lastNameField: this.lastNameField
    });
  }

  ngOnInit(): void {
  }

  changeVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  register() {

  }

}
