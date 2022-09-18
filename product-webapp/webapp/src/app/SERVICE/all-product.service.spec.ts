import { TestBed } from '@angular/core/testing';

import { AllProductService } from './all-product.service';

describe('AllProductService', () => {
  let service: AllProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
