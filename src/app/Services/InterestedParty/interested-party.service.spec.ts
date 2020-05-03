import { TestBed } from '@angular/core/testing';

import { InterestedPartyService } from './interested-party.service';

describe('InterestedPartyService', () => {
  let service: InterestedPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestedPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
