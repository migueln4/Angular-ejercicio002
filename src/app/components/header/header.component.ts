//Este componente se ha creado de forma manual
import{Component} from '@angular/core'; //Lo primero que hay que hacer es importar el component para poder utilizarlo

@Component({
    selector: 'app-header', //Lo primero que se define cuando se crea un component es el selector. Esto es lo que luego se traduce en las etiquetas que se van a colocar más adelante en la web para reflejar dónde está el controlador. El nombre cumple un estándar al empezar por app-, ya que refleja que es personalizado.
    template: `<h1>Header component<h1>` //Cuando esta plantilla es algo sencillo y no ocupa muchas líneas, se puede definir directamente aquí usando las `` (ojo, que no las comillas de siempre). Sin embargo, cuando se trata de una plantilla mucho más grande, hay que crear un archivo .html aparte.
})

export class HeaderComponent { //Se añade la palabra export para que refleje que esto se puede usar desde cualquier otro lugar.

}