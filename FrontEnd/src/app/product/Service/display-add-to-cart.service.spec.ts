import { TestBed } from '@angular/core/testing';

import { DisplayAddToCartService } from './display-add-to-cart.service';

describe('DisplayAddToCartService', () => {
  let service: DisplayAddToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayAddToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
