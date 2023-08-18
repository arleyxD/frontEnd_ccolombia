import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TiendaService } from 'src/app/auth/services/tienda.service';
import { Tienda } from 'src/app/auth/interfaces/tienda.interface';
import { inventario } from '../../interfaces/inventario.interfaceFT';
import { InventarioService } from '../../services/inventario.service';
import { Fruta } from '../../interfaces/frutas.interface';

import Swal from 'sweetalert2';
import { NgForm, ɵValue } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  userId!: string;
  selectedProduct!: inventario;
  products: inventario[]= [];
  tienda!: Tienda;
  frutas: Fruta[]=[];

  constructor(
    private authService: AuthService,
    private tiendaService: TiendaService,
    private inventarioService: InventarioService
  ) {
    this.userId = this.authService.user._id;
  }

  ngOnInit(): void {
   this.loadInventario();
  }

  loadInventario():void{
    this.tiendaService.getTiendaUser(this.userId).subscribe(
      (response) => {
        if (response.ok) {
          this.tienda = response.produt!;
          console.log(this.tienda)
          this.inventarioService.getInventarioByTienda(this.tienda._id).subscribe((data) => {
            this.products = data;
            console.log(this.products);
          });

        } else {
          console.error('Error al obtener las tiendas:', response.msg);
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }


  deleteProduct(id: string){
    Swal.fire({
      title: 'Seguro quiere Elimar?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.inventarioService.deleteInventario(id).subscribe(() => {
          this.loadInventario(); // Refrescamos la lista de productos tras borrar uno
        });
       console.log("logica para eliminar el objeto ")
        Swal.fire('Saved!', '', 'success')
      } 
    })
  }

  closeModal(): void {
    let modal = document.getElementById('editProductModal') as HTMLElement;
    modal.style.display = 'none';
    modal.classList.remove('show');
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
    let modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop) {
      modalBackdrop.parentNode?.removeChild(modalBackdrop);
    }
  }

  // Método para abrir el modal y establecer el producto seleccionado
  editProduct(product: inventario): void {
    this.selectedProduct = { ...product };
    console.log("producto a modiifcar",this.selectedProduct);
    // Abrir el modal usando JavaScript puro
    let modal = document.getElementById('editProductModal') as HTMLElement;
    modal.style.display = 'block';
    modal.classList.add('show');
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
    let modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(modalBackdrop);
  }

  // Método para enviar el formulario
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.selectedProduct)
      if(this.selectedProduct.tipo === 'bulto'){
        this.selectedProduct.inventarioBulto  = Number((document.getElementById('inventarioBulto') as HTMLInputElement).value);
        this.selectedProduct.valorB = Number((document.getElementById('valorB') as HTMLInputElement).value);
      }else{
        this.selectedProduct.inventarioCanastilla = Number((document.getElementById('inventarioCanastilla') as HTMLInputElement).value);
        this.selectedProduct.valorC = Number((document.getElementById('valorC') as HTMLInputElement).value);
      }
      this.selectedProduct.valorMedioKilo = Number((document.getElementById('valorMedioKilo') as HTMLInputElement).value);
      this.selectedProduct.valorKilo = Number((document.getElementById('valorKilo') as HTMLInputElement).value);
      console.log(this.selectedProduct)
      this.inventarioService.editInventario(this.selectedProduct).subscribe(() => {
        this.loadInventario();
  
        // Cierra el modal usando JavaScript puro
        let modal = document.getElementById('editProductModal') as HTMLElement;
        modal.style.display = 'none';
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('modal-open');
        let modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (modalBackdrop) {
          modalBackdrop.parentNode?.removeChild(modalBackdrop);
        }
  
        Swal.fire('Actualizado!', '', 'success');
      });
    }
  } 
  
}
