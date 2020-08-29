import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '@app/services';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  hidePassword: boolean = true;
  hideConfirm: boolean = true;

  userDataForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder) {

    this.userDataForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      email: ['', [Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });

    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirm: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
  }

  onPasswordInput() {
    if (this.passwordForm.hasError('notSame'))
      this.p.confirm.setErrors([{'notSame': true}]);
    else
      this.p.confirm.setErrors(null);
  }

  checkPassword(group: FormGroup): ValidationErrors | null {
    return group.controls.password.value === group.controls.confirm.value ? null : { notSame: true };
  }

  public get user() {
    return this.authService.userValue;
  }

  public get f() {
    return this.userDataForm.controls;
  }

  public get p() {
    return this.passwordForm.controls;
  }

  updateUser() {
    let user = this.authService.userValue;
    this.userService.put(user).subscribe(
      data => {
        alert('Your information has been updated successfully');
      },
      error => {
        alert('Failed to update information');
      }
    );
  }

  changePassword(newPassword: string) {
    let user = this.authService.userValue;
    this.userService.changePassword(user, newPassword).subscribe(
      data => {
        if (data.errors) {
          alert(data.errors.join('\n'));
          return;
        }

        this.passwordForm.reset();
        alert('Password changed successfully');
      },
      error => {
        alert('Failed to change password');
      }
    );;
  }

  logout() {
    this.authService.logout();
  }
}
