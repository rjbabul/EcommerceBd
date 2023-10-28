import { TestBed } from '@angular/core/testing';
import { ProductShowService } from './product-show.service';

describe('ProductShowService', () => {
  let service: ProductShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
