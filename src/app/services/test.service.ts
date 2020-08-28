import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Test } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  private readonly url: string = `${environment.apiURL}/tests`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(this.url);
  }

  get(id: number): Observable<Test> {
    return this.http.get<Test>(`${this.url}/${id}`);
  }

  create(test: Test) {
    return this.http.post<Test>(this.url, test);
  }

  update(test: Test) {
    return this.http.put<Test>(this.url, test);
  }

  delete(id: number) {
    return this.http.delete<Test>(`${this.url}/${id}`);
  }
}