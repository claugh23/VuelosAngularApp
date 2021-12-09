import { TestBed } from '@angular/core/testing';

import { CrearUsuarioServiceService } from './crear-usuario-service.service';

describe('CrearUsuarioServiceService', () => {
  let service: CrearUsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearUsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
