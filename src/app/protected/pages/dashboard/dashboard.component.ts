import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TiendaService } from 'src/app/auth/services/tienda.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showUser = true;
  showTienda = false;

  tienda = {
    nameTienda: '',
    nit: '',
    local: '',
    location: '',
    scheduleStart: '',
    scheduleEnd: '',
    contact: ''
  };

  idEmpresa!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tiendaService: TiendaService
  ) {}

  /** Getters */
  get user() {
    // TODO: NO Extrae los valores del usuario que vamos a ocupar, ni los hace persistentes mientras que el usuario esta logueado
    return this.authService.user;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl( '/auth/login' );
  }
}
