import { Component } from '@angular/core';

@Component({
  selector: 'app-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css']
})
export class TxtComponent {

  imagenAleatoria!: string;

  
  constructor() {
    this.imagenAleatoria = `https://picsum.photos/400/300/?random=${Math.random()}`;
  }
  
  articulos = [
    {
      titulo: 'Artículo 1',
      descripcion: 'Descripción del artículo 1',
      imagen: 'ruta-imagen-1.jpg'
    },
    {
      titulo: 'Artículo 2',
      descripcion: 'Descripción del artículo 2',
      imagen: 'ruta-imagen-2.jpg'
    },
    {
      titulo: 'Artículo 3',
      descripcion: 'Descripción del artículo 3',
      imagen: 'ruta-imagen-3.jpg'
    }
    // Agrega más objetos de artículo si es necesario
  ];
}
