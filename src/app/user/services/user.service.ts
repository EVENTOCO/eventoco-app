import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { UserResponse } from '../model/user-response.model';
import { Observable } from 'rxjs';
import { UserRequest } from '../model/user-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = enviroment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl}/users/${id}`);
  }

  getUserByUsername(username: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl}/users/username/${username}`);
  }

  getUserByEmail(email: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl}/users/email/${email}`);
  }

  createUser(userDTO: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/users`, userDTO);
  }

  updateUser(id: number, userDTO: UserRequest): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.baseUrl}/users/${id}`, userDTO);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }

  loginUser(email: string, password: string): Observable<UserResponse> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.get<UserResponse>(`${this.baseUrl}/users/login`, { params });
  }
}
