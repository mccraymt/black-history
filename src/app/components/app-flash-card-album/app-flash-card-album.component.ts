import { Component, OnInit, Input  } from '@angular/core';
import { FlashCard } from '../../interfaces/flash-card';

@Component({
  selector: 'app-flash-card-album',
  templateUrl: './app-flash-card-album.component.html',
  styleUrls: ['./app-flash-card-album.component.css']
})
export class AppFlashCardAlbumComponent implements OnInit {
  @Input() flashCards: FlashCard[];

  constructor() { }

  ngOnInit() {
  }

}
