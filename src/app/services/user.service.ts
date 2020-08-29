import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Auth } from '../models'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url: string = `${environment.apiURL}/auth`;

  constructor(private http: HttpClient) { }

  put(user: User) : Observable<User> {
    return this.http.put<User>(`${this.url}/user`, user);
  }

  changePassword(user: User, password: string) : Observable<Auth> {
    return this.http.post<Auth>(`${this.url}/password`, { username: user.username, password });
  }
}
