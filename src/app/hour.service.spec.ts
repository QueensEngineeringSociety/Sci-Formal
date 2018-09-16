import { TestBed } from '@angular/core/testing';

import { HourService } from './hour.service';

describe('HourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HourService = TestBed.get(HourService);
    expect(service).toBeTruthy();
  });
});
