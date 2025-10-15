import { TestBed } from '@angular/core/testing';

import { Anaquel } from './anaquel';

describe('Anaquel', () => {
  let service: Anaquel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Anaquel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
