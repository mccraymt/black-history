import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFlashCardAlbumComponent } from './app-flash-card-album.component';

describe('AppFlashCardAlbumComponent', () => {
  let component: AppFlashCardAlbumComponent;
  let fixture: ComponentFixture<AppFlashCardAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFlashCardAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFlashCardAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
