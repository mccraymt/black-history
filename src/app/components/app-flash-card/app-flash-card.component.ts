import { Component, OnInit, Input  } from '@angular/core';
import { FlashCard } from '../../interfaces/flash-card';

@Component({
  selector: 'app-flash-card',
  templateUrl: './app-flash-card.component.html',
  styleUrls: ['./app-flash-card.component.css']
})
export class AppFlashCardComponent implements OnInit {
  @Input() customClass: string;
  @Input() flashCard: FlashCard;
  @Input() showDetails: boolean;
  @Input() showImage: boolean;
  @Input() showImageOverlay: boolean;

  constructor() {
    this.customClass = '';
    this.showDetails = false;
    this.showImage = true;
    this.showImageOverlay = true;
  }

  ngOnInit() {
  }

}
