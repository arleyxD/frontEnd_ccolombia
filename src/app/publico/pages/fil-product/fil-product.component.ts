import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { inventario } from 'src/app/protected/interfaces/inventario.interfaceFT';
import { InventarioService } from 'src/app/protected/services/inventario.service';

@Component({
  selector: 'app-fil-product',
  templateUrl: './fil-product.component.html',
  styleUrls: ['./fil-product.component.css']
})
export class FilProductComponent {

  inventarios: inventario[] = []; 
  inventarioActual: inventario[] = [];
  idTienda: string = '';


  constructor(private route: ActivatedRoute, private servicioInventario: InventarioService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idTienda = params['id'];
      // Ahora puedes utilizar el valor de 'id' como desees en tu componente
      console.log('ID:', this.idTienda);
      // Por ejemplo, podrías hacer una llamada a una API para obtener los detalles basados en este 'id'
    });
    this.llamadoServicioInventario();
    

  }

  llamadoServicioInventario(){
    this.servicioInventario.getInventario().subscribe(data => {
    this.inventarios = data;
    console.log(this.inventarios);
    console.log(this.filtrarInventario());
    });
  }

  filtrarInventario(): inventario[]{
    if(this.idTienda){
      console.log(true);
      this.inventarioActual = this.inventarios.filter(product => product.id_tienda._id === this.idTienda);
      return this.inventarios.filter(product => product.id_tienda._id === this.idTienda);
    }else{
      console.log(false);
      return this.inventarios;
    }
    
  }
  

  // filtrarInventario(): inventario[]{
  //   console.log("ttiendas",this.filtroActual)
  //   if (!this.filtroActual || this.filtroActual === 'Todos') {
  //     return this.inventarios;
  //   } else {
  //     return this.inventarios.filter(producto => producto.id_fruta.tipo === this.filtroActual);
  //   }
  // }

}
