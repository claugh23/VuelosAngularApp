import { TestBed } from '@angular/core/testing';

import { ComprasVuelosService } from './compras-vuelos.service';

describe('ComprasVuelosService', () => {
  let service: ComprasVuelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasVuelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
