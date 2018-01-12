import { Component, OnInit } from '@angular/core';
import { FlashCard } from '../../interfaces/flash-card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  flashCards: FlashCard[];
  title = 'Hello';

  constructor( private apiService: ApiService) { }

  public ngOnInit() {
    console.log('App Start');
    this.apiService.getFlashCards()
    .subscribe((flashCards) => {
      this.flashCards = flashCards as FlashCard[];
    });
  }
}
