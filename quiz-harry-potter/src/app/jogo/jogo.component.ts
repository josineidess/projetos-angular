import { Component, OnInit } from '@angular/core';
import { Perguntas } from '../classes/perguntas';
import { PerguntasService } from '../servicos/perguntas.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  resultado: string;
  acertou: boolean;
  perguntas: string;
  errou: boolean;
  msg: string;
  respostas: string;
  pergunta: {
    id: number,
    pergunta: string,
    resposta: string
  };
  pergunta2: {
    id: number,
    pergunta: string,
    resposta: string
  };
  aleatorias: string[];
  b: string;
  c: string;
  d: string;
  m;
  t;
  i;
  sortear;
  numeros: string[];
  constructor(public pg: PerguntasService) {
    this.msg = '';
    this.numeros = ['1', '2', '3', '4', '5', '6', '8', '10'];
    this.pergunta =  {
      id: 1,
      pergunta: 'Quantas horcruxes o Voldemort fez?',
      resposta: '7'
    };
    this.aleatorias = ['Belatrix', 'Gina', 'Luna', 'Lily'];
    this.sortear = this.aleatorias.forEach(tent => {
      console.log('tent');
    });
    this.pergunta2 = {
      id: 2,
      pergunta : 'Qual o nome da mãe do Harry?',
      resposta: 'Lilian'
    };
    this.perguntas = this.pergunta.pergunta;
    this.respostas = this.pergunta.resposta;
    this.acertou = true;
    this.errou = true;
  }
  ngOnInit() {
    this.sortearNumeros(this.numeros);
  }
  acertar() {
    this.acertou = !this.acertou;
    this.resultado = 'Parabéns você acertou!';
    this.msg = 'Parabéns você acertou!';
  }
  errar() {
    this.errou = !this.errou;
    this.resultado = 'Que pena você errou...';
    this.msg = 'Que pena você errou...';
  }
  voltar() {
    this.pg.esconder = !this.pg.esconder;
  }
  proxima() {
    this.perguntas = this.pergunta2.pergunta;
    this.respostas = this.pergunta2.resposta;
    this.msg = '';
    this.sortearRespostas(this.aleatorias);
  }
  sortearRespostas(array) {
    this.m = array.lenght;
    while (this.m) {
    this.i = Math.floor(Math.random() * this.m--);
    this.t = array[this.m];
    array[this.m] = array[this.i];
    array[this.i] = this.t;
    }
    this.b = array[0];
    this.c = array[1];
    this.d = array[2];

  }
  sortearNumeros(array) {
    this.m = array.lenght;
    while (this.m) {
    this.i = Math.floor(Math.random() * this.m--);
    this.t = array[this.m];
    array[this.m] = array[this.i];
    array[this.i] = this.t;
    }
    this.b = array[0];
    this.c = array[1];
    this.d = array[2];

  }

}
