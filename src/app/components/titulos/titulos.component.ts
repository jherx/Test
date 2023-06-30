import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent {
  @Input() EntradaNombreHijo: string = 'sin nombre'
  @Input() entrada!: string;
  @Output() salida = new EventEmitter<string>();

  // titulo = 'Título inicial';
  editandoTitulo = false;
  nuevoTitulo = '';


  cambiarNombre() {
    this.EntradaNombreHijo = 'Pablo'
    this.salida.emit(this.EntradaNombreHijo)
  }

  editarTitulo() {
    this.editandoTitulo = true;
    this.nuevoTitulo = this.EntradaNombreHijo;
  }

  guardarTitulo() {
    this.editandoTitulo = false;
    this.EntradaNombreHijo = this.nuevoTitulo;
    this.salida.emit(this.EntradaNombreHijo)
    console.log(this.EntradaNombreHijo);
    
  }
}
