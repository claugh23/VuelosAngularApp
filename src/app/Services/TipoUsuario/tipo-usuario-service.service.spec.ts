import { TestBed } from '@angular/core/testing';

import { TipoUsuarioServiceService } from './tipo-usuario-service.service';

describe('TipoUsuarioServiceService', () => {
  let service: TipoUsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoUsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
