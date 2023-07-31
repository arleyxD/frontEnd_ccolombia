import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas-frutas',
  templateUrl: './tarjetas-frutas.component.html',
  styleUrls: ['./tarjetas-frutas.component.css']
})
export class TarjetasFrutasComponent {
  @Input() filtroActual: string = '';
  
  productos: any[] = [
    // Aquí puedes definir los productos de frutas y sus detalles según tu necesidad.
    { nombre: 'Manzana', categoria: 'frutas' },
    { nombre: 'Naranja', categoria: 'frutas' },
    { nombre: 'Tomate', categoria: 'verduras' },
    { nombre: 'Lechuga', categoria: 'verduras' },
    // ...
  ];

  filtrarProductos(): any[] {
    if (!this.filtroActual || this.filtroActual === 'todos') {
      return this.productos;
    } else {
      return this.productos.filter(producto => producto.categoria === this.filtroActual);
    }
  }
}
