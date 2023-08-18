import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
import { FormularioDinamicoComponent } from './pages/products/new-product/formulario-dinamico/formulario-dinamico.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    ProductsComponent,
    NewProductComponent,
    UpdateProductComponent,
    FormularioDinamicoComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ]
})
export class ProtectedModule { }
