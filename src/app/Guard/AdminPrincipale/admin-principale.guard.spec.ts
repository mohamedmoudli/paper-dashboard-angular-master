import { TestBed } from '@angular/core/testing';

import { AdminPrincipaleGuard } from './admin-principale.guard';

describe('AdminPrincipaleGuard', () => {
  let guard: AdminPrincipaleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminPrincipaleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
