import { TestBed } from '@angular/core/testing';

import { GetpetApiService } from './getpet-api.service';

describe('GetpetApiService', () => {
  let service: GetpetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
