import { TestBed } from '@angular/core/testing';

import { PasajesServiceService } from './pasajes-service.service';

describe('PasajesServiceService', () => {
  let service: PasajesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
