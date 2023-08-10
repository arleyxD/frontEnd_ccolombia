import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-fil-product',
  templateUrl: './fil-product.component.html',
  styleUrls: ['./fil-product.component.css']
})
export class FilProductComponent {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      // Ahora puedes utilizar el valor de 'id' como desees en tu componente
      console.log('ID:', id);
      // Por ejemplo, podrías hacer una llamada a una API para obtener los detalles basados en este 'id'
    });
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
