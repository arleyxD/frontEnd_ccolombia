import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/auth/interfaces/tienda.interface';
import { tiendaResponse } from 'src/app/auth/interfaces/tiendaResponse.interface';
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
  tiendas!: Tienda;
  tiendaResponse! : tiendaResponse;
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

  ngOnInit() {
    let iduser = this.authService.user._id;
    this.tiendaService.getTiendaUser(iduser).subscribe(
      (response) => {
        if (response.ok) {
          this.tiendas = response.produt!;
          console.log(this.tiendas)
        } else {
          console.error('Error al obtener las tiendas:', response.msg);
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
  
  
  


  logout() {
    this.authService.logout();
    this.router.navigateByUrl( '/auth/login' );
  }
}
