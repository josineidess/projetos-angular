import { Injectable, EventEmitter, Output , Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  nota: number;
  @Output() notaAlterada: EventEmitter<number>;
  constructor() {
    this.nota = 50;
    this.notaAlterada = new EventEmitter();
  }
  aumentar(inc: number): void {
    if (inc >= 0 && this.nota + inc <= 100) {
      this.nota += inc;
      this.notaAlterada.emit(this.nota);
    }
  }
  diminuir(dec: number): void {
    if (dec >= 0 && this.nota - dec >= 0) {
      this.nota -= dec;
      this.notaAlterada.emit(this.nota);
    }
  }

}
