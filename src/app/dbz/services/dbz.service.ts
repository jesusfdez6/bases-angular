import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";






@Injectable()
export class dbzService {

        constructor(){

            console.log("servicio inicializado");

        }

 private  _personajes : Personaje[] =[];


  agregarNuevoPersonaje($event:Personaje){

    this._personajes.push($event);

  }

  get personajes():Personaje[]{

      return [...this._personajes];
  }


} 