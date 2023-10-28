import { TestBed } from '@angular/core/testing';

import { ProductAddToCartService } from './product-add-to-cart.service';

describe('ProductAddToCartService', () => {
  let service: ProductAddToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAddToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
