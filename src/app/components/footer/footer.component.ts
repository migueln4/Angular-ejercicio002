import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] //Lo que se defina aquí se aplica únicamente en el archivo HTML especificado encima.
})
export class FooterComponent {
  anio:number; //es mejor que la inicialización de las variables de las clases venga en el constructor. Así, cuando se cree el FooterComponent, llama al constructor y al año se le da el valor del año actual.

  constructor() {
    this.anio = new Date().getFullYear();
  }

}
