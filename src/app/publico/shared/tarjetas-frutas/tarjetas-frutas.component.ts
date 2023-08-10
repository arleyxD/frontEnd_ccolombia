import { Component, Input, OnInit } from '@angular/core';
import { inventario } from 'src/app/protected/interfaces/inventario.interfaceFT';
import { InventarioService } from 'src/app/protected/services/inventario.service';

@Component({
  selector: 'app-tarjetas-frutas',
  templateUrl: './tarjetas-frutas.component.html',
  styleUrls: ['./tarjetas-frutas.component.css']
})
export class TarjetasFrutasComponent implements OnInit {
  @Input() filtroActual: string = '';
  inventarios: inventario[]=[];


  constructor(private inventarioService: InventarioService ){}
  
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


  filtrarInventario(): inventario[]{
    console.log("Fruta",this.filtroActual)
    if (!this.filtroActual || this.filtroActual === 'Todos') {
      return this.inventarios;
    } else {
      return this.inventarios.filter(producto => producto.id_fruta.tipo === this.filtroActual);
    }
  }


  ngOnInit(): void {
    this.inventarioService.getInventario().subscribe(data =>{
      this.inventarios= data;
      console.log(this.inventarios)
    });
  }
}
