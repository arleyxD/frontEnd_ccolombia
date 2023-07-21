import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from 'src/app/auth/interfaces/category.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // Atributos
  categories: Array<Category> = [
    {
      _id: 'fruits',
      name: 'Fruits',
      description: 'Fruits',
    },
    {
      _id: 'vegetables',
      name: 'Vegetables',
      description: 'Vegetables',
    }
  ];

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
    private productService: ProductsService
  ) {}

  createProduct() {
    console.group( 'productForm' );
    console.log( this.productForm.value );
    console.log( this.productForm.valid );
    console.groupEnd();

    this.productService.createProduct( this.productForm.value )
      .subscribe( ( response ) => {
        console.log( response );
      });


  }

}
