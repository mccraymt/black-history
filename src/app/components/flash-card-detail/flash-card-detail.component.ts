import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashCard } from '../../interfaces/flash-card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-flash-card-detail',
  templateUrl: './flash-card-detail.component.html',
  styleUrls: ['./flash-card-detail.component.css']
})
export class FlashCardDetailComponent implements OnInit {
  flashCard: FlashCard;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.flashCard = null;
    this.getFlashCard();
  }

  getFlashCard() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getFlashCard(id)
      .subscribe(flashCard => this.flashCard = flashCard as FlashCard);
  }

}
