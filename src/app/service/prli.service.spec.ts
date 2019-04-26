import { TestBed } from '@angular/core/testing';

import { PrliService } from './prli.service';

describe('PrliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrliService = TestBed.get(PrliService);
    expect(service).toBeTruthy();
  });
});
