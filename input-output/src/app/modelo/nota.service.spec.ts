import { TestBed, inject } from '@angular/core/testing';

import { NotaService } from './nota.service';

describe('NotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotaService]
    });
  });

  it('should be created', inject([NotaService], (service: NotaService) => {
    expect(service).toBeTruthy();
  }));
});
