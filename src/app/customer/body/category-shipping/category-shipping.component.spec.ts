import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryShippingComponent } from './category-shipping.component';

describe('CategoryShippingComponent', () => {
  let component: CategoryShippingComponent;
  let fixture: ComponentFixture<CategoryShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
