import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://test-demo.aemenersol.com';

  constructor(private http: HttpClient) { }

  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.apiUrl + '/api/dashboard');
  }
}
