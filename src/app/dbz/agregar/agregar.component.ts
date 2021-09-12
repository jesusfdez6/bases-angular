import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  nuevo :Personaje= {
    nombre:'',
    poder:0
  }

  //@Output() onNewCharacter: EventEmitter<Personaje>= new EventEmitter();

  constructor(private dbzServices:dbzService){}
 
  Agregar(){

    if(this.nuevo.nombre.trim().length===0){
      
      return;
    }
      this.dbzServices.agregarNuevoPersonaje(this.nuevo);
    //this.onNewCharacter.emit(this.nuevo);


    this.nuevo = {
      nombre:'',
      poder:0
    }
 
  }


}
