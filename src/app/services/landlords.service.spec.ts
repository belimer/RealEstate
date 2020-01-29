import { TestBed } from '@angular/core/testing';

import { LandlordsService } from './landlords.service';

describe('LanlordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandlordsService = TestBed.get(LandlordsService);
    expect(service).toBeTruthy();
  });
});
