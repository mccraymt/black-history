import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardDetailComponent } from './flash-card-detail.component';

describe('FlashCardDetailComponent', () => {
  let component: FlashCardDetailComponent;
  let fixture: ComponentFixture<FlashCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
