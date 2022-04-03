import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cards';
  cards : Card[] = [];
  card: Card = {
    id: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc : ''
  }
  constructor(private cardService: CardsService) {

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAllCards()
    .subscribe(
      response =>
      {
        this.cards = response;
      }
    );
  }

  onSubmit() 
  {
    //console.log(this.card);
     this.cardService.addCard(this.card)
     .subscribe(
       response => {
         
         console.log(response);
       }
     )
  }
}
