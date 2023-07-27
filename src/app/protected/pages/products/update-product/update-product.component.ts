import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/auth/interfaces/category.interface';
import { ProductsService } from 'src/app/services/products.service';

import { categories } from '../fake-categories';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/protected/interfaces/product.interface';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  // Atributos
  categories: Array<Category> = categories;
  productId!: string;
  product!: Product;

  // Procuramos usar los mismos nombres que espera nuestra API en las propiedades que agrupamos en nuestro FormBuilder Group
  productForm: FormGroup = this.fb.group({
    name: [
      '',   // Valor por defecto
      [
        Validators.required
      ]
    ],
    price: [
      '',   // Valor por defecto
      []
    ],
    quantity: [
      '',   // Valor por defecto
      [
        Validators.required,
        Validators.min( 1 )
      ]
    ],
    category: [
      '',  // Valor por defecto
      []
    ],
    description: [
      '',  // Valor por defecto
      []
    ]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ( result ) => {
          const { id: productId } = result;
          this.productId = productId;

          return this.productService.getProductById( productId );
        } )
      )
      .subscribe( product => {
        console.log( product );

        /** Establece valores de producto en el atributo del componente */
        this.product = product;

        /** Establece los valores de cada uno de los campos del formulario */
        this.productForm.setValue({
          name: this.product?.name,
          price: this.product?.price,
          quantity: this.product?.quantity,
          category: this.product?.category,         // TODO: Hacer que el campo select en la vista tambien se actualice
          description: this.product?.description
        });
      });


  }

  updateProduct() {
    console.group( 'productForm' );
    console.log( this.productForm.value );
    console.log( this.productForm.valid );
    console.log( this.productId );
    console.groupEnd();

    this.productService.updateProduct(
      this.productId,
      this.productForm.value
    )
      .subscribe( ( response ) => {
        console.log( response );
      });

    this.productForm.reset();

    setTimeout( () => {
      this.router.navigate( [ 'dashboard', 'products' ] );
    }, 1000 );

  }

}
