import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';

@Component({
  selector: 'kj-proyecto-content',
  templateUrl: './proyecto-content.component.html',
  styleUrls: ['./proyecto-content.component.scss']
})
export class ProyectoContentComponent implements OnInit {

  loadProyect: boolean = false;
  nombreProyecto: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProyect = !!this.proyectoService.proyectoSeleccionado;
    
    if (!this.proyectoService.proyectoSeleccionado) {
      this.router.navigate(["app/proyectos"])
    } else {
      this.nombreProyecto = this.proyectoService.proyectoSeleccionado.nombre;
    }
    
  }

}
