import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBrandComponent } from './category-brand.component';

describe('CategoryBrandComponent', () => {
  let component: CategoryBrandComponent;
  let fixture: ComponentFixture<CategoryBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
