import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estrato } from '@core/interfaces/estrato.interface';
import { ProyectoTipo } from '@core/interfaces/proyecto.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private http: HttpClient
  ) { }

  getTipos(): Observable<ProyectoTipo[]> {
    return this.http.get<ProyectoTipo[]>(`${environment.apiProyecto}/tipos`);
  }

  getEstratos(): Observable<Estrato[]> {
    return this.http.get<Estrato[]>(`${environment.apiProyecto}/estratos`);
  }
}
