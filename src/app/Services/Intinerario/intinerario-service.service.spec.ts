import { TestBed } from '@angular/core/testing';

import { IntinerarioServiceService } from './intinerario-service.service';

describe('IntinerarioServiceService', () => {
  let service: IntinerarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntinerarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
