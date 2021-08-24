import { TestBed } from '@angular/core/testing';

import { PublicTodosResolver } from './public-todos.resolver';

describe('PublicTodosResolver', () => {
  let resolver: PublicTodosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PublicTodosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
