import { TestBed } from '@angular/core/testing';

import { GuideutilisationService } from './guideutilisation.service';

describe('GuideutilisationService', () => {
  let service: GuideutilisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideutilisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
