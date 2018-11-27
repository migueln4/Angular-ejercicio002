import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; //Para que se pueda declarar, antes hay que importarlo aquí.

@NgModule({
  declarations: [ //Aquí es donde se declaran los archivos que tienen los componentes. Hasta que un componente no se declara aquí, para Angular es un archivo más que contiene su estructura de carpetas pero al que no le tiene que hacer caso específicamente.
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
