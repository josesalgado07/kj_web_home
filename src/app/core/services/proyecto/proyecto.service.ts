import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Denominacion } from '@core/interfaces/denominacion.interface';
import { Estrato } from '@core/interfaces/estrato.interface';
import { Proyecto, ProyectoInfo, ProyectoTipo } from '@core/interfaces/proyecto.interface';
import { delay, Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoSeleccionado?: Proyecto;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${environment.apiProyecto}/usuario`, {
      headers: {
        'user_rol': this.auth.rol
      }
    });
  }

  guardar(proyecto: Proyecto) {
    return this.http.post(`${environment.apiProyecto}/guardar`, proyecto,
    {
      headers: {
        'user_rol': this.auth.rol
      }
    })
      .pipe(take(1));
  }

  getTipos(): Observable<ProyectoTipo[]> {
    return this.http.get<ProyectoTipo[]>(`${environment.apiProyecto}/tipos`);
  }

  getEstratos(): Observable<Estrato[]> {
    return this.http.get<Estrato[]>(`${environment.apiProyecto}/estratos`);
  }

  getDenominacion(): Observable<Denominacion[]> {
    return of([
      {
        "id": 1,
        "descripcion": "Numérico"
      },
      {
        "id": 2,
        "descripcion": "Alfa-Numérico"
      }
    ])
    .pipe(delay(100));
  }

  getProyecto(proyecto_id: number): Observable<ProyectoInfo> {
    return this.http.get<ProyectoInfo>(`${environment.apiProyecto}/info/${proyecto_id}`);
  }
}
