import { Component, OnInit } from '@angular/core';
import { PerguntasService } from '../servicos/perguntas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  play: boolean;
  mudar: boolean;
  song: {
    id: number,
    title: string,
    artist: string;
    url: string
  };
  constructor(public pg: PerguntasService) {
    this.play = true;
    this.mudar = true;
  this.song = {
    id: 1,
    title: 'harry potter',
    artist: 'wb',
    url: '../../assents/musicas/tema.mp3'
  };
  }

  ngOnInit() {
  }
  jogar() {
    this.pg.esconder = !this.pg.esconder;
  }
  configurar() {
    this.mudar = !this.mudar;
  }

}
