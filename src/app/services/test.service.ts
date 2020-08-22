import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Test } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(`${environment.apiURL}/tests`);
  }

  get(id: number): Observable<Test> {
    return this.http.get<Test>(`${environment.apiURL}/tests/${id}`);
  }
}