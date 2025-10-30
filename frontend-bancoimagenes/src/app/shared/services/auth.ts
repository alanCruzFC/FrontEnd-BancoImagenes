import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router){}

  login(credentials: { 
    username: string; 
    password:string}){
      return this.http.post<{ token: string}>(`${this.apiUrl}/login`, credentials);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.role || null;
}
  
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
