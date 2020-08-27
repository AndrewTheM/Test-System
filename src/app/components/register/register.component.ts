import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/services';
import { User } from '@app/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hidePassword: boolean = true;
  hideConfirm: boolean = true;
  loading: boolean = false;
  returnUrl: string;

  registerForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

    if (this.authService.userValue) {
      this.router.navigate(['/']);
      return;
    }

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirm: [''],
      email: ['', [Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public get f() {
    return this.registerForm.controls;
  }

  checkPassword(group: FormGroup): ValidationErrors | null {
    return group.controls.password.value === group.controls.confirm.value ? null : { notSame: true };
  }

  onPasswordInput() {
    if (this.registerForm.hasError('notSame'))
      this.f.confirm.setErrors([{'notSame': true}]);
    else
      this.f.confirm.setErrors(null);
  }

  register() {
    if (this.registerForm.invalid)
      return;

    let user = new User(this.f.username.value, this.f.password.value, this.f.email.value,
                          this.f.firstName.value, this.f.lastName.value);

    this.loading = true;                      
    this.authService.register(user)
      .pipe(first())
          .subscribe(
              data => {
                this.loading = false;
                alert('Registration succeded! Returning to login page...');
                this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl }});
              },
              error => {
                this.loading = false;
                alert(error);
              });
  }
}