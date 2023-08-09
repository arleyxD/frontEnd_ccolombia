import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TiendaService } from 'src/app/auth/services/tienda.service';


@Component({
  selector: 'app-fil-product-boton',
  templateUrl: './fil-product-boton.component.html',
  styleUrls: ['./fil-product-boton.component.css']
})
export class FilProductBotonComponent {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: string[] = [];
  selectedOption: string = '';
  
  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    
    this.tiendaService.getStores().subscribe(stores => {
      this.options = stores;
    });

    this.myControl.valueChanges.subscribe(value => {
      this.filteredOptions = this._filter(value);
    });
  }

  onOptionClick(option: string) {
    this.selectedOption = option;
    this.myControl.setValue(option);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  @Output() filtroSeleccionado = new EventEmitter<string>();

  onFiltroSeleccionado(filtro: string): void {
    this.filtroSeleccionado.emit(filtro);
  }

}
