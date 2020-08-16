import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: "",
      password: ""
    });
  }

  ngOnInit(): void {
  }

  changeVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  submitCredentials() {
    
  }
}
