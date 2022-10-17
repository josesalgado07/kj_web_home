import { Component, OnInit } from '@angular/core';
import { Rol } from '@core/interfaces/roles.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kj-seleccionar-rol',
  templateUrl: './seleccionar-rol.component.html',
  styleUrls: ['./seleccionar-rol.component.scss']
})
export class SeleccionarRolComponent implements OnInit {

  roles: Rol[] = [];

  constructor(
    private config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.roles = this.config.data.roles;
  }

  seleccionarRol(rol: number) {
    this.ref.close(rol);
  }

}
