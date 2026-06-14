import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInParams } from '../models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private apiUrl = 'http://test-demo.aemenersol.com';

  constructor(private http: HttpClient) { }

  login(credentials: SignInParams): Observable<string> {
    return this.http.post<any>(this.apiUrl + '/api/account/login', credentials);
  }
}