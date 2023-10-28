import { TestBed } from '@angular/core/testing';
import { ProductEditService } from './product-edit.service';

describe('ProductEditService', () => {
  let service: ProductEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
