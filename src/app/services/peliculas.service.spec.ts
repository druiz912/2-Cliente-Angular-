import { TestBed } from '@angular/core/testing';

import { PeliculasServiceService } from './peliculas.service';

describe('PeliculasServiceService', () => {
  let service: PeliculasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
