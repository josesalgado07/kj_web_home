import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin, UsuarioLoginResponse } from '@core/interfaces/usuario.interface';
import { BYPASS_TOKEN } from '@core/util/context-token/context-token';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usuario: UsuarioLogin): Observable<UsuarioLoginResponse> {
    return this.http.post<UsuarioLoginResponse>(`${environment.apiUsuarios}/auth`, usuario,
      {
        context: new HttpContext().set(BYPASS_TOKEN, true)
      })
      .pipe(take(1));
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(['/login']);
  }

  switchRole(rol: any) {
    this.rol = rol;

    switch (rol) {
      case 1:
        // Kinjo Admin
        this.router.navigate(["/app/eventos"])
        break;
      case 2:
        // Administrador
        this.router.navigate(["/app/eventos"])
        break;
      case 3:
        // Constructor
        this.router.navigate(["/app/proyectos"])
        break;
      case 4:
        // Inquilino
        this.router.navigate(["/app/comunicados"])
        break;
      case 5:
        // Probador de servicio
        this.router.navigate(["/app/solicitudes"])
        break;
      case 6:
        // Propietario
        this.router.navigate(["/app/propiedades"])
        break;
      default:
        break;
    }
  }

  get authToken(): string {
    return localStorage.getItem('jwt')!;
  }

  get jwt(): any {
    const token = localStorage.getItem('jwt')!;
    return JSON.parse(window.atob(token.split('.')[1]));
  }

  set jwt(token: string) {
    localStorage.setItem('jwt', token);
  }

  get username(): string {
    let usuario = this.jwt.usuario;
    return usuario.nombres + ' ' + usuario.apellidos;
  }

  get rol(): string {
    return localStorage.getItem('rol')!;
  }

  set rol(rol: string) {
    localStorage.setItem('rol', rol);
  }
}
