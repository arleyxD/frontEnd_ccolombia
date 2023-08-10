import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FilProductComponent } from './pages/fil-product/fil-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,     // Carga componente por defecto
    children: [
      {
        path: 'main',
        component: PrincipalComponent
      },
      {
        path: 'contactanos',
        component: ContactanosComponent
      },
      {
        path: 'main/filproductos',
        component: FilProductComponent
      },
      {
        path: 'main/filproductos/:id',
        component: FilProductComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
