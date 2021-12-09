import { TestBed } from '@angular/core/testing';

import { CompaniServiceService } from './compani-service.service';

describe('CompaniServiceService', () => {
  let service: CompaniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
