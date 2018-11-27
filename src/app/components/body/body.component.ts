import{Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    frase:any = { //Se crea un objeto dentro de la clase. Esto ya se puede utilizar dentro del HTML que crea este objeto.
        mensaje:"Un gran poder conlleva una gran responsabilidad.",
        autor:"Ben Parker"
    };

    mostrar:boolean = true;

    //El *ngFor trabaja en base a arrays.

    personajes: string[] = ["Veneno","Doctor Octopus","Kingpin","Escorpión","Camaleón","Duende Verde"]; //Esto sigue siendo una propiedad del BodyComponent. Se puede pegar en cualqueir lado del HTML

}