import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
  
export class MainPageComponent  {


  constructor(private dbzService:dbzService){

  }


  get personajes(): Personaje[]{

    return this.dbzService.personajes
  
  }

  agregarNuevoPersonaje($event:Personaje){

    this.dbzService.agregarNuevoPersonaje($event);

  }
  

}
