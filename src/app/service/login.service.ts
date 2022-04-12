import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDto } from '../models/userLogin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'https://localhost:7147/api/Login';

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLoginDto): Observable<UserLoginDto> {
   return this.httpClient.post<UserLoginDto>(this.baseUrl, userLogin)
  }
}
