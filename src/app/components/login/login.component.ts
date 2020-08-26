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

  returnUrl: string;
  hidePassword: boolean = true;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
                
    if (this.authenticationService.userValue) { 
        this.router.navigate(['/']);
        return;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  changeVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  public get f() {
    return this.loginForm.controls;
  }

  submitCredentials() {
    if (this.loginForm.invalid)
      return;

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.loading = false;
              alert(error);
            });
  }
}
