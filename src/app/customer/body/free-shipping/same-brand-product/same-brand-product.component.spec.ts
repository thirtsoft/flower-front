import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameBrandProductComponent } from './same-brand-product.component';

describe('SameBrandProductComponent', () => {
  let component: SameBrandProductComponent;
  let fixture: ComponentFixture<SameBrandProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameBrandProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameBrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
