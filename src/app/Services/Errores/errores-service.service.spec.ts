import { TestBed } from '@angular/core/testing';

import { ErroresServiceService } from './errores-service.service';

describe('ErroresServiceService', () => {
  let service: ErroresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
