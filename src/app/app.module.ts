import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosComponent } from './contatos/contatos.component';
import { ContatosDetalheComponent } from './contatos-detalhe/contatos-detalhe.component';
import { ContatoService } from './contatos/contatos.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatosDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ContatoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
