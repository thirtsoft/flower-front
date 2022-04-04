import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySliderComponent } from './body-slider.component';

describe('BodySliderComponent', () => {
  let component: BodySliderComponent;
  let fixture: ComponentFixture<BodySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
