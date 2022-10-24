import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApartamentoResponse } from '@core/interfaces/apartamento.interface';
import { Propietario } from '@core/interfaces/propietario.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApartamentoService {

  constructor(
    private http: HttpClient
  ) { }

  getResidencias(proyectoId: number): Observable<ApartamentoResponse> {
    return this.http.get<ApartamentoResponse>(`${environment.apiApartamento}/usuario/${proyectoId}`);
  }
 
  getTorres(proyectoId: number): Observable<any> {
    return this.http.get<ApartamentoResponse>(`${environment.apiApartamento}/torres/${proyectoId}`);
  }
  
  getDisponibles(proyectoId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiApartamento}/disponibles/${proyectoId}`);
  }
  
  getDisponiblesTorre(proyectoId: number, torre: number): Observable<any> {
    return this.http.get<any>(`${environment.apiApartamento}/disponibles/${proyectoId}/${torre}`);
  }

  asignar(datos: Propietario) {
    return this.http.post(`${environment.apiApartamento}/asignar`, datos)
  }

}
