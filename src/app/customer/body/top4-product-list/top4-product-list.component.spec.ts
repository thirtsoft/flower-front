import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top4ProductListComponent } from './top4-product-list.component';

describe('Top4ProductListComponent', () => {
  let component: Top4ProductListComponent;
  let fixture: ComponentFixture<Top4ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top4ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top4ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
