import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  filtroActual: string = '';

  onFiltroSeleccionado(filtro: string): void {
    this.filtroActual = filtro;
  }
}
