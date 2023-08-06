import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FrutaResponse } from '../interfaces/fruta-response.interface';
import { Fruta } from '../interfaces/frutas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  BASE_URL: string = environment.baseUrl;
  token!: string;
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set('X-Token', `${this.token}`);
  }

  getFrutas(): Observable<Fruta[]> {
    return this.http.get<FrutaResponse>(`${this.BASE_URL}/frutas`)
      .pipe(
        tap(response => {                                // tap: Se utiliza para realizar efectos secundarios para las notificaciones de la fuente observable
            console.log( "llamado frutas",response );
            // Valida si la propiedad ok es verdadera  
          }),
        map(response => response.product ||[]),
        catchError(err => {
          console.error(err);
          return of([] as Fruta[]);
        })
      );
  }

  // getFruta(id: string): Observable<Fruta> {
  //   return this.http.get<FrutaResponse>(`${this.BASE_URL}/frutas/${id}`, { headers: this.headers })
  //     .pipe(
  //       map(response => response.product || null), // Proporciona un valor predeterminado en caso de undefined
  //       catchError(err => {
  //         console.error(err);
  //         return of(null);
  //       })
  //     );
  // }
  deleteFruta(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/frutas/${id}`, { headers: this.headers })
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        })
      );
  }
}
