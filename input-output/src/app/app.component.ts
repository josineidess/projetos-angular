import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notaAtual: number;

  onNotaAlterada(nota: number) {
    this.notaAtual = nota;
    console.log(this.notaAtual);
  }

}
