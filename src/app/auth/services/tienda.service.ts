import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tienda } from '../interfaces/tienda.interface';
import { tiendaResponse } from '../interfaces/tiendaResponse.interface';
import { tiendaRes } from '../interfaces/TiendaRes.interface';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private apiUrl = `${environment.baseUrl}/tiendas`;
  token!: string;
  headers!: HttpHeaders;
  stores = ['Tienda 1', 'pTienda 2', 'cTienda 3', 'dTienda 4']; // Ejemplo de tiendas


  constructor(private http: HttpClient) {
    const token = localStorage.getItem( 'token' );    // Obtiene el Token del LocalStorage
    this.token = token ? token : '';                  // Verifica si existe el token en el LocalStorage
    this.headers = new HttpHeaders().set( 'X-Token', `${ this.token }` );
  }

  getStores(): Observable<string[]> {
    // Aquí deberías hacer una llamada a tu API para obtener las tiendas
    // pero para el ejemplo, solo devolveremos la lista de tiendas que ya tenemos
    return of(this.stores);
  }

  // Función para obtener todas las tiendas
  getTienda(id: string): Observable<Tienda> {
    const url = `${this.apiUrl}/${id}`;
    console.log("url get tienda", url);
    return this.http.get<Tienda>(url);
  }

  // Función para obtener todas las tiendas por medio del id User
  getTiendaUser(id: string): Observable<tiendaResponse> {
    const url = `${this.apiUrl}/user/${id}`;
    console.log("url get tienda", url);
    return this.http.get<tiendaResponse>(url);
  }
  

  // Función para obtener todas las tiendas
  getTiendas(): Observable<tiendaRes> {
    return this.http.get<tiendaRes>(this.apiUrl);
  }

  // Función para crear una nueva tienda
  crearTienda(tienda: Tienda): Observable<tiendaResponse> {
    console.log(this.apiUrl)
    console.log(tienda)
    console.log(this.headers)
    return this.http.post<tiendaResponse>(this.apiUrl, tienda );
  }

  // Función para actualizar una tienda existente
  actualizarTienda(id: string, tienda: Tienda): Observable<Tienda> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Tienda>(url, tienda, { headers: this.headers }  );
  }

  // Función para eliminar una tienda
  eliminarTienda(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers }  );
  }

  
}
