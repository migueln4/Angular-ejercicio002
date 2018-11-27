import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; //Para que se pueda declarar, antes hay que importarlo aquí.
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component'; //Cuando se crea de forma automática algo, ya se hace la importación aquí y se incluye en las dependencias.

@NgModule({
  declarations: [ //Aquí es donde se declaran los archivos que tienen los componentes. Hasta que un componente no se declara aquí, para Angular es un archivo más que contiene su estructura de carpetas pero al que no le tiene que hacer caso específicamente.
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
