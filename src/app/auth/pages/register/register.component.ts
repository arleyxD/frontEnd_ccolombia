import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Procuramos usar los mismos nombres que espera nuestra API en las propiedades que agrupamos en nuestro FormBuilder Group
  registerForm: FormGroup = this.fb.group({
    name: [
      '',   // Valor por defecto
      [
        Validators.required
      ]
    ],
     email: [
      '',   // Valor por defecto vacio
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '', // Valor por defecto vacio
      [
        Validators.required,
        Validators.minLength( 6 )
      ]
    ]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register() {
    // console.group( 'registerForm' );
    // console.log( this.registerForm.value );
    // console.log( this.registerForm.valid );
    // console.groupEnd();

    const { name, email, password } = this.registerForm.value;

    this.authService.register( name, email, password )
      .subscribe( ( value ) => {

        /** Si el registro es valido. Es un valor booleano true */
        if( value === true ) {
          // this.router.navigate([ 'dashboard' ]);
          this.router.navigateByUrl( '/dashboard' );
        }
        else {
          console.log( value );
          const { msg } = value as { ok: boolean, msg: string };

          // Si el login no es valido. Es un string que trae el mensaje de error del BackEnd
          Swal.fire(
            'Error',
            msg,
            'error'
          );
        }
      });
  }

}
