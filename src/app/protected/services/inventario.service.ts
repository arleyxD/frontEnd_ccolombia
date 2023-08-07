import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { inventario } from '../interfaces/inventario.interface';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

    /** Atributos */
    BASE_URL: string = environment.baseUrl;
    token!: string;
    headers!: HttpHeaders;
  
  
    constructor(
      private http: HttpClient
    ) {
      const token = localStorage.getItem( 'token' );    // Obtiene el Token del LocalStorage
      this.token = token ? token : '';                  // Verifica si existe el token en el LocalStorage
      this.headers = new HttpHeaders().set( 'X-Token', `${ this.token }` );
      // console.log( this.token );
    }
  
    enviarInventario(inventarios: inventario[]) {
      console.log('${ this.BASE_URL }/inventario');
      console.log(inventarios);
      console.log(this.headers)
      return this.http.post(`${ this.BASE_URL }/inventario`, inventarios, { headers: this.headers });
    }
}
