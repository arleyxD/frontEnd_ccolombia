import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/auth/interfaces/tienda.interface';
import { TiendaService } from 'src/app/auth/services/tienda.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit{

  tiendas: Tienda[]=[];
  constructor(private tiendaService: TiendaService){}

  ngOnInit(): void {
    this.tiendaService.getTiendas().subscribe(data =>{
      this.tiendas= data.produt || [];
      console.log(this.tiendas);
    });
  }

}
