//Este componente se ha creado de forma manual
import{Component} from '@angular/core'; //Lo primero que hay que hacer es importar el component para poder utilizarlo

@Component({
    selector: 'app-header', //Lo primero que se define cuando se crea un component es el selector. Esto es lo que luego se traduce en las etiquetas que se van a colocar más adelante en la web para reflejar dónde está el controlador. El nombre cumple un estándar al empezar por app-, ya que refleja que es personalizado.
    //template: //Cuando esta plantilla es algo sencillo y no ocupa muchas líneas, se puede definir directamente aquí usando las `` (ojo, que no las comillas de siempre). Sin embargo, cuando se trata de una plantilla mucho más grande, hay que crear un archivo .html aparte.
    //Es probable que haya algún warning por la extensión de alguna de las líneas que se incluyan en esta parte. Lo que hay que hacer es ir al archivo tslint.json y editarlo en la opción "max-line-length" (al ponerlo a false deja de haber este error).
    templateUrl: './header.component.html'//Aquí se establece la ruta, que es relativa al lugar en el que te encuentras en este preciso momento.
  //Cuando el contenido va en un archivo html aparte, se guarda en la misma carpeta en la que está este archivo y se le pone el mismo nombre, pero acabado en .html.

})

export class HeaderComponent { //Se añade la palabra export para que refleje que esto se puede usar desde cualquier otro lugar.

}