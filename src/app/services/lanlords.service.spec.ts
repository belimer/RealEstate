import { TestBed } from '@angular/core/testing';

import { LanlordsService } from './lanlords.service';

describe('LanlordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanlordsService = TestBed.get(LanlordsService);
    expect(service).toBeTruthy();
  });
});
