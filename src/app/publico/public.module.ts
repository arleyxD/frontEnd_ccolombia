import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './public-routing.module';

import { MainComponent } from './pages/main/main.component';
import { TarjetasComponent } from './shared/tarjetas/tarjetas.component';
import { BotonesComponent } from './shared/botones/botones.component';
import { TarjetasFrutasComponent } from './shared/tarjetas-frutas/tarjetas-frutas.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CarritoComponent } from './shared/carrito/carrito.component';
import { FilProductComponent } from './pages/fil-product/fil-product.component';
import { FilProductBotonComponent } from './pages/fil-product/fil-product-boton/fil-product-boton.component';
import { TradingComponent } from './pages/principal/trading/trading.component';



@NgModule({
  declarations: [
    MainComponent,
    TarjetasComponent,
    BotonesComponent,
    TarjetasFrutasComponent,
    ContactanosComponent,
    PrincipalComponent,
    CarritoComponent,
    FilProductComponent,
    FilProductBotonComponent,
    TradingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
