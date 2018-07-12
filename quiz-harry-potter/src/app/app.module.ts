import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JogoComponent } from './jogo/jogo.component';
import { PerguntasService } from './servicos/perguntas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PerguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
