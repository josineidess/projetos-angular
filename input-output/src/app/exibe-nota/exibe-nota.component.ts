import { Component, OnInit, Input } from '@angular/core';
import { NotaService } from '../modelo/nota.service';

@Component({
  selector: 'app-exibe-nota',
  templateUrl: './exibe-nota.component.html',
  styleUrls: ['./exibe-nota.component.css']
})
export class ExibeNotaComponent implements OnInit {
  @Input() nota: string;
  constructor() { }

  ngOnInit() {
  }
}
