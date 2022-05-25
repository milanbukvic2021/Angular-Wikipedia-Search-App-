import { TestBed } from '@angular/core/testing';

import { Wikipedia1Service } from './wikipedia1.service';

describe('Wikipedia1Service', () => {
  let service: Wikipedia1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wikipedia1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
