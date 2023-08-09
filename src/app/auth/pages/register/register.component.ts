import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TiendaService } from '../../services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  step = 1;

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  empresaData: FormGroup = this.fb.group({
    nameTienda: ['', Validators.required],
    nit: ['', Validators.required],
    local: ['', Validators.required],
    location: ['', Validators.required],
    scheduleStart: ['', Validators.required],
    scheduleEnd: ['', Validators.required],
    contact: ['', Validators.required],
  });

  userData: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

   

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tiendaService: TiendaService
    
  ) {}

  register() {
    if (this.step === 1) {
      // Step 1 data
      if (this.empresaData.valid) {
        this.nextStep();
      } else {
        console.log("Formulario de empresaData no válido");
      }
    } else if (this.step === 2) {
      // Step 2 data
      if (this.userData.valid) {
        const { name, email, password } = this.userData.value;

        this.authService.register(name, email, password).subscribe((value) => {
          /** Si el registro es valido. Es un valor booleano true */
          if (value === true) {
            this.creacionTienda();
          } else {
            console.log(value);
            const { msg } = value as { ok: boolean, msg: string };
            // Si el registro no es válido, muestra el mensaje de error del Backend
            Swal.fire('Error', msg, 'error');
          }
        });
      } else {
        // Handle the case of invalid form, if desired.
        console.log("Formulario de userData no válido");
      }
    }
  } 




  creacionTienda(){
  // Registro exitoso, redirige a la página de dashboard o a donde sea necesario
  const nuevaTienda = this.empresaData.value,
  user = this.authService.user;
  console.log("Este el id",user);
  nuevaTienda.idUsuario = user._id;

  console.log("nueva empresa", nuevaTienda );
  this.tiendaService.crearTienda(nuevaTienda).subscribe(
    (respuesta) => {      
      console.log('Tienda creada:', respuesta);
     // const IdEmpresa = respuesta.produt;
      //localStorage.setItem( 'IdEmpresa', IdEmpresa ? IdEmpresa:'');
      this.router.navigateByUrl('/dashboard');
    },
    (error) => {
      console.error('Error al crear la tienda:', error);
      // Implementa aquí la lógica para el rollback en caso de error en la creación de tienda 
    }
  );
  }

}