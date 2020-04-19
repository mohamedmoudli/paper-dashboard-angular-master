import { TestBed } from '@angular/core/testing';

import { EnjeuService } from './enjeu.service';

describe('EnjeuService', () => {
  let service: EnjeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnjeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
