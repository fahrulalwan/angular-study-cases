import { TestBed } from '@angular/core/testing';

import { UserCanactivateGuard } from './user-canactivate.guard';

describe('UserCanactivateGuard', () => {
  let guard: UserCanactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserCanactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
