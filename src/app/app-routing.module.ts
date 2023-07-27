import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /** Define la ruta de los dos modulos usando carga perezosa */
  {
    path: 'publico',
    loadChildren: () => import( './publico/public.module' )
      .then( module => module.AuthModule )
  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' )
      .then( module => module.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import( './protected/protected.module' )
      .then( module => module.ProtectedModule )
  },
  {
    path: '**',
    redirectTo: 'publico'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
