import { TestBed } from '@angular/core/testing';

import { PartieinteresseService } from './partieinteresse.service';

describe('PartieinteresseService', () => {
  let service: PartieinteresseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartieinteresseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
