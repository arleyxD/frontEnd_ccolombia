import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { inventario } from '../interfaces/inventario.interfaceFT';
import { inventarioS } from '../interfaces/inventario.interface';
import { Observable, map, tap } from 'rxjs';

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
  
    enviarInventario(inventarios: inventarioS[]) {
      console.log('${ this.BASE_URL }/inventario');
      console.log(inventarios);
      console.log(this.token)
      console.log(this.headers)
      return this.http.post(`${ this.BASE_URL }/inventario`, inventarios, { headers: this.headers });
    }
    getInventario() {
      return this.http.get<inventario[]>(
        `${ this.BASE_URL }/inventario`,   // URL del BackEnd al que debemos hacer la peticion
        { headers: this.headers }                         // Cabeceras con información requerida
      )
      .pipe(
        tap( response => {
          console.log( response );
        })
      );
    }

    getInventarioByTienda( userId: string ) {
      return this.http.get<inventario[]>(
        `${ this.BASE_URL }/inventario/listado/${ userId }`,   // URL del BackEnd al que debemos hacer la peticion
        { headers: this.headers }                         // Cabeceras con información requerida
      )
      .pipe(
        tap( response => {
          console.log( response );
        })
      );
    }

    deleteInventario( userId: string | undefined ) {
      return this.http.delete<inventario>(
        `${ this.BASE_URL }/inventario/${ userId }`,   // URL del BackEnd al que debemos hacer la peticion
        { headers: this.headers }                         // Cabeceras con información requerida
      );
    }

    editInventario(product: inventario): Observable<inventario> {
      return this.http.put<inventario>(`${ this.BASE_URL }/inventario/${product._id}`, product, { headers: this.headers }  );
    }

}
