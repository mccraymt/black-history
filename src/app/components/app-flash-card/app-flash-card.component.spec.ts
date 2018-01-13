import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFlashCardComponent } from './app-flash-card.component';

describe('AppFlashCardComponent', () => {
  let component: AppFlashCardComponent;
  let fixture: ComponentFixture<AppFlashCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFlashCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
