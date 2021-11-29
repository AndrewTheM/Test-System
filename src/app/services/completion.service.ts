import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Attempt } from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompletionService {

  private readonly url: string = `${environment.apiURL}/attempts`;

  constructor(private http: HttpClient) { }

  getAll(userId: string): Observable<Attempt[]> {
    return this.http.get<Attempt[]>(`${this.url}/${userId}`);
  }

  create(attempt: Attempt): Observable<Attempt> {
    return this.http.post<Attempt>(this.url, attempt);
  }

  clearUser(userId: string): Observable<Attempt[]> {
    return this.http.delete<Attempt[]>(`${this.url}/${userId}`);
  }
}
