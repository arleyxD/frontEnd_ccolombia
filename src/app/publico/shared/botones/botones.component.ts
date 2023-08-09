import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  @Output() filtroSeleccionado = new EventEmitter<string>();

  onFiltroSeleccionado(filtro: string): void {
    this.filtroSeleccionado.emit(filtro);
  }

}
