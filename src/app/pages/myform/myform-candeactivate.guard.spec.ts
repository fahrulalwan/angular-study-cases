import { TestBed } from '@angular/core/testing';

import { MyformCandeactivateGuard } from './myform-candeactivate.guard';

describe('MyformCandeactivateGuard', () => {
  let guard: MyformCandeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyformCandeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
