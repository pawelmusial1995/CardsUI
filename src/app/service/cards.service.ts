import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  //base
  baseUrl = 'https://localhost:7147/api/cards';

  constructor(private httpClient: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.baseUrl);
  }

  addCard(card: Card): Observable<Card> {
    card.id = '00000000-0000-0000-0000-000000000000';
    return this.httpClient.post<Card>(this.baseUrl, card);
  }
  deleteCard(id: string): Observable<Card>
  {
    return this.httpClient.delete<Card>(this.baseUrl + '/' + id);
  }

  updateCard(card: Card) : Observable<Card>
  {
    return this.httpClient.put<Card>(this.baseUrl + '/' + card.id, card);
  }
}
