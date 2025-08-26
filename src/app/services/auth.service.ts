import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  api = 'https://b585ede3eb35.ngrok-free.app/api/auth';



}


  
 
