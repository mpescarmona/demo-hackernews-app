import { TestBed } from '@angular/core/testing';

import { HackernewService } from './hackernew.service';

describe('HackernewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackernewService = TestBed.get(HackernewService);
    expect(service).toBeTruthy();
  });
});
