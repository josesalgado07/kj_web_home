import { Component, OnInit } from '@angular/core';
import { ApartamentoInfo } from '@core/interfaces/apartamento.interface';
import { ApartamentoService } from '@core/services/apartamento/apartamento.service';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'kj-proyecto-residencias',
  templateUrl: './proyecto-residencias.component.html',
  styleUrls: ['./proyecto-residencias.component.scss']
})
export class ProyectoResidenciasComponent implements OnInit {

  tipoProyecto: number = 1;

  listaApartamentos$: Observable<any>;
  
  constructor(
    private proyectoService: ProyectoService,
    private apartamentoService: ApartamentoService
  ) {
    this.listaApartamentos$ = this.apartamentoService
      .getResidencias(this.proyectoService.proyectoSeleccionado!.id)
      .pipe(
        map((data: any) => {
          this.tipoProyecto = data.tipo;
          return data.apartamentos;
        }
      ));
  }

  ngOnInit(): void {
  }

}
