import { TestBed, inject } from '@angular/core/testing';

import { PerguntasService } from './perguntas.service';

describe('PerguntasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerguntasService]
    });
  });

  it('should be created', inject([PerguntasService], (service: PerguntasService) => {
    expect(service).toBeTruthy();
  }));
});
