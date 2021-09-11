import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'bases';
  contador :number = 0;
  base: number = 5;


  contar = (valor:number)=>{
    this.contador +=valor*this.base;
  }

}
