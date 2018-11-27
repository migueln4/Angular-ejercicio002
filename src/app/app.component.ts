import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) //Todo lo que hay hasta aquí es el decorador que le dice a Angular que lo que viene a continuación es un componente que se puede inyectar.
export class AppComponent {
  nombre:string = "Miguel";
  apellido:string = "Negrillo";
}
