import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
      HttpClientTestingModule,    //we don't want to send actual http requests, but rather use a Mock API of the test framework.
  ],
});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
