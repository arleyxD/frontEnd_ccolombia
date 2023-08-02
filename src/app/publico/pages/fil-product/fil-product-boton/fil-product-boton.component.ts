import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fil-product-boton',
  templateUrl: './fil-product-boton.component.html',
  styleUrls: ['./fil-product-boton.component.css']
})
export class FilProductBotonComponent {
  
  @Output() filtroSeleccionado = new EventEmitter<string>();

  onFiltroSeleccionado(filtro: string): void {
    this.filtroSeleccionado.emit(filtro);
  }

}
