import { TestBed } from '@angular/core/testing';

import { PrService } from './pr.service';

describe('PrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrService = TestBed.get(PrService);
    expect(service).toBeTruthy();
  });
});
