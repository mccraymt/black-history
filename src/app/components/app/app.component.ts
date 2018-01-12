import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FlashCard } from '../../interfaces/flash-card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
