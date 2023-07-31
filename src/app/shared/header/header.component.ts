import { Component ,OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
   isLogged = false;
   userId!: string;

   constructor( private router: Router,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) { }

    /** Getters */
    get user() {
      // TODO: NO Extrae los valores del usuario que vamos a ocupar, ni los hace persistentes mientras que el usuario esta logueado
      return this.authService.user;
    }

    
    logout() {
      this.authService.logout();
      this.router.navigateByUrl( '/auth/login' );
    }

  ngOnInit(): void {
    this.updateUserIdAndIsLogged();
  }

  ngDoCheck(): void {
    this.updateUserIdAndIsLogged();
  }

  private updateUserIdAndIsLogged(): void {
    this.userId = this.authService.user && this.authService.user._id ? this.authService.user._id : '';
    const newIsLogged = this.userId != '';
    if (newIsLogged !== this.isLogged) {
      this.isLogged = newIsLogged;
      this.cd.detectChanges();
    }
  }
}
