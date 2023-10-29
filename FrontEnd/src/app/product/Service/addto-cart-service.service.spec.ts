import { TestBed } from '@angular/core/testing';

import { AddtoCartServiceService } from './addto-cart-service.service';

describe('AddtoCartServiceService', () => {
  let service: AddtoCartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtoCartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
