import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAddToCartComponent } from './display-add-to-cart.component';

describe('DisplayAddToCartComponent', () => {
  let component: DisplayAddToCartComponent;
  let fixture: ComponentFixture<DisplayAddToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAddToCartComponent]
    });
    fixture = TestBed.createComponent(DisplayAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
