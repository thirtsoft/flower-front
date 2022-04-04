import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferStartComponent } from './offer-start.component';

describe('OfferStartComponent', () => {
  let component: OfferStartComponent;
  let fixture: ComponentFixture<OfferStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
