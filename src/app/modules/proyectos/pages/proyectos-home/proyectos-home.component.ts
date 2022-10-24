import { Component, OnInit } from '@angular/core';
import { Proyecto } from '@core/interfaces/proyecto.interface';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'kj-proyectos-home',
  templateUrl: './proyectos-home.component.html',
  styleUrls: ['./proyectos-home.component.scss']
})
export class ProyectosHomeComponent implements OnInit {
  
  listProyectos$: Observable<Proyecto[]>;

  constructor(
    private proyectoService: ProyectoService
  ) {
    this.listProyectos$ = this.proyectoService.getProyectos();
  }

  ngOnInit(): void {
  }

  seleccionarProyecto(proyecto: Proyecto) {
    this.proyectoService.proyectoSeleccionado = proyecto;
  }

}
