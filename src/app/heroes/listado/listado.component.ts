import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

    heroes:string[] = ['Spiderman','Ironman','Thor','Hulk','Antman','Capitan America','Soldado del invierno'
  ,'Falcon','Viuda negra','Ojo de Halcon'];
    heroeBorrado :string ='';


    borrarHeroe(){

      this.heroeBorrado = this.heroes.shift() || '';

    }

}
