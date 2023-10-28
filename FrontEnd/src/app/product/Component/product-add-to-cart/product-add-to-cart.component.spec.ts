import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddToCartComponent } from './product-add-to-cart.component';

describe('ProductAddToCartComponent', () => {
  let component: ProductAddToCartComponent;
  let fixture: ComponentFixture<ProductAddToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddToCartComponent]
    });
    fixture = TestBed.createComponent(ProductAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
