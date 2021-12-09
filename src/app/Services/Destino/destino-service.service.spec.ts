import { TestBed } from '@angular/core/testing';

import { DestinoServiceService } from './destino-service.service';

describe('DestinoServiceService', () => {
  let service: DestinoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
