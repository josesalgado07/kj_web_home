import { Component, OnInit } from '@angular/core';
import { ProyectoInfo } from '@core/interfaces/proyecto.interface';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'kj-proyecto-info',
  templateUrl: './proyecto-info.component.html',
  styleUrls: ['./proyecto-info.component.scss']
})
export class ProyectoInfoComponent implements OnInit {

  proyectoInfo: Observable<ProyectoInfo>;

  constructor(
    private proyectoService: ProyectoService
  ) {
    this.proyectoInfo = this.proyectoService.getProyecto(this.proyectoService.proyectoSeleccionado!.id);
  }

  ngOnInit(): void {
  }

  calcularCantidadDeViviendas(proyecto: ProyectoInfo) {
    if (proyecto.cantidad_pisos && proyecto.cantidad_apartamentos) {
      return proyecto.cantidad_torres * proyecto.cantidad_pisos * proyecto.cantidad_apartamentos;
    } 
    return proyecto.cantidad_torres;
  }

}
