import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './public-routing.module';

import { MainComponent } from './pages/main/main.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';


@NgModule({
  declarations: [
    MainComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
