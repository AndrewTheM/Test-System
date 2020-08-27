import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Test, Attempt } from '@app/models';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(`${environment.apiURL}/tests`);
  }

  get(id: number): Observable<Test> {
    return this.http.get<Test>(`${environment.apiURL}/tests/${id}`);
  }

  getAttempts(userId: string) : Observable<Attempt[]> {
    return this.http.get<Attempt[]>(`${environment.apiURL}/attempts/${userId}`);
  }

  postAttempt(attempt: Attempt) : Observable<Attempt> {
    return this.http.post<Attempt>(`${environment.apiURL}/attempts`, attempt);
  }
}