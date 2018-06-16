import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotaService } from '../modelo/nota.service';

@Component({
  selector: 'app-insere-nota',
  templateUrl: './insere-nota.component.html',
  styleUrls: ['./insere-nota.component.css']
})
export class InsereNotaComponent implements OnInit {
  nota: number;
  @Output() notaAlterada: EventEmitter<number>;
  constructor(private st: NotaService) {
    this.nota = this.st.nota;
    this.notaAlterada = this.st.notaAlterada;
  }

  ngOnInit() {
  }



}
