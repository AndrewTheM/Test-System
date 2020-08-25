import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Auth } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    let localUser = JSON.parse(localStorage.getItem('user'));
    this.userSubject = new BehaviorSubject<User>(localUser);
    this.user = this.userSubject?.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiURL}/auth/login`, { username, password })
      .pipe(map<Auth, User>(auth => {
        if (auth.errors && auth.errors.length > 0) {
          alert(auth.errors.join('\n'));
          return null;
        }

        localStorage.setItem('user', JSON.stringify(auth.user));
        this.userSubject.next(auth.user);
        return auth.user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
