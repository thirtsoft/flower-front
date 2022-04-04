import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStartComponent } from './category-start.component';

describe('CategoryStartComponent', () => {
  let component: CategoryStartComponent;
  let fixture: ComponentFixture<CategoryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
