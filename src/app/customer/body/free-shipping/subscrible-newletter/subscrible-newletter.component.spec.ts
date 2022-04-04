import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribleNewletterComponent } from './subscrible-newletter.component';

describe('SubscribleNewletterComponent', () => {
  let component: SubscribleNewletterComponent;
  let fixture: ComponentFixture<SubscribleNewletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribleNewletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribleNewletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
