import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNewletterComponent } from './subscribe-newletter.component';

describe('SubscribeNewletterComponent', () => {
  let component: SubscribeNewletterComponent;
  let fixture: ComponentFixture<SubscribeNewletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeNewletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeNewletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
