import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/auth/interfaces/tienda.interface';
import { TiendaService } from 'src/app/auth/services/tienda.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit{

  private images=[
    {src:'../../../../assets/imgTiendas/tiendaE.jpg'},
    {src:'../../../../assets/imgTiendas/tiendaF.jpg'},
    {src:'../../../../assets/imgTiendas/tiendaO.jpg'},
    {src:'../../../../assets/imgTiendas/tiendaP.jpg'},
    {src:'../../../../assets/imgTiendas/tiendaR.jpg'},
    {src:'../../../../assets/imgTiendas/tiendaX.jpg'}
  ];


  tiendas: Tienda[]=[];
  constructor(private tiendaService: TiendaService){
  }

  ngOnInit(): void {
    this.tiendaService.getTiendas().subscribe(data =>{
      this.tiendas= data.produt || [];
      console.log(this.tiendas);
    });
    this.updateRandomImage();
  }

  updateRandomImage() {
    const r= Math.floor(Math.random() * (this.images.length - 1)) + 0;
    console.log(this.images[r].src)
    return this.images[r].src;
  }

  

}
