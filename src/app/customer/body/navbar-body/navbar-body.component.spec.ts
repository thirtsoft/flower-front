import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBodyComponent } from './navbar-body.component';

describe('NavbarBodyComponent', () => {
  let component: NavbarBodyComponent;
  let fixture: ComponentFixture<NavbarBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
