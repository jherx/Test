import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  nombreHome:string = 'nombre del componente home'

  cambiarNombre(){
    this.nombreHome = 'Gerson home'
  }





}
