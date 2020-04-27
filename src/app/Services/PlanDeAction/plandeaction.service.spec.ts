import { TestBed } from '@angular/core/testing';

import { PlandeactionService } from './plandeaction.service';

describe('PlandeactionService', () => {
  let service: PlandeactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlandeactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
