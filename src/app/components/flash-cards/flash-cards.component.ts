import { Component, OnInit } from '@angular/core';
import { FlashCard } from '../../interfaces/flash-card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
  flashCards: FlashCard[];
  title = 'Hello';

  constructor( private apiService: ApiService ) { }

  public ngOnInit() {
    console.log('App Start');
    this.apiService.getFlashCards()
    .subscribe((flashCards) => {
      this.flashCards = flashCards as FlashCard[];
    });
  }
}
