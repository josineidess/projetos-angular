import { Injectable } from '@angular/core';
import { Perguntas} from '../classes/perguntas';
@Injectable({
  providedIn: 'root'
})
export class PerguntasService {
  esconder: boolean;
  constructor() {
    this.esconder = true;
  }
}
