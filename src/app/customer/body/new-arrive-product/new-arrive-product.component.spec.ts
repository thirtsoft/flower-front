import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArriveProductComponent } from './new-arrive-product.component';

describe('NewArriveProductComponent', () => {
  let component: NewArriveProductComponent;
  let fixture: ComponentFixture<NewArriveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArriveProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArriveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
