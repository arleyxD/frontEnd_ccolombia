import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
