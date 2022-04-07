import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'https://localhost:7147/api/login';

  constructor(private httpClient: HttpClient) { }
}
