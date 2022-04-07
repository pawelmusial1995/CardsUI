import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:7147/api/users';
  constructor(private httpClient : HttpClient) { }

  getAllUsers() {
    this.httpClient.get(this.baseUrl);
  }
}
