import { TestBed } from '@angular/core/testing';

import { RecommendedProductService } from './recommended-product.service';

describe('RecommendedProductService', () => {
  let service: RecommendedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
