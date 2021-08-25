import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ListaDeContatoComponent } from './components/lista-de-contato/lista-de-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ListaDeContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
