import {Component} from '@angular/core';
 
@Component({

    selector:'app-contador',
    template:`
    <h1>Contador App</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button class="button" (click)="contar(1)">+{{base}}</button>
    <span>{{contador}}</span>
    <button class="button" (click)="contar(-1)">-{{base}}</button>`,

})

export class ContadorComponent{

    title : string = 'bases';
    contador :number = 0;
    base: number = 5;
  
  
    contar = (valor:number)=>{
      this.contador +=valor*this.base;
    }


}