import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoryShopComponent } from './sidebar-category-shop.component';

describe('SidebarCategoryShopComponent', () => {
  let component: SidebarCategoryShopComponent;
  let fixture: ComponentFixture<SidebarCategoryShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCategoryShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCategoryShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
