import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { validateTokenGuard } from '../auth/guards/validate-token.guard';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ],
    canActivate: [ validateTokenGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
