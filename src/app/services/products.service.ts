import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../protected/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /** Atributos */
  BASE_URL: string = environment.baseUrl;
  token!: string;


  constructor(
    private http: HttpClient
  ) {
    const token = localStorage.getItem( 'token' );    // Obtiene el Token del LocalStorage
    this.token = token ? token : '';                  // Verifica si existe el token en el LocalStorage
    // console.log( this.token );
  }

  /** Realiza petición al endpoint del BackEnd que registra productos */
  createProduct( product: Product ) {
    const headers = new HttpHeaders().set( 'X-Token', `${ this.token }` );

    return this.http.post(
      `${ this.BASE_URL }/products`,      // URL del BackEnd al que debemos hacer la peticion
      product,                            // Objeto de producto a crear
      { headers }                         // Cabeceras con información requerida
    );
  }

}
