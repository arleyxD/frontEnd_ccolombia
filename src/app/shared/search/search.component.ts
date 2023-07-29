import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TiendaService } from 'src/app/auth/services/tienda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
}

