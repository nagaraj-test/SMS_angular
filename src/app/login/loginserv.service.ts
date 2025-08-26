import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  constructor(private http: HttpClient) { }
  api = 'https://b585ede3eb35.ngrok-free.app/api/auth/login';

  getlogincredentials(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }
}
