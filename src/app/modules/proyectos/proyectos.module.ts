import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosHomeComponent } from './pages/proyectos-home/proyectos-home.component';
import { PrimengModule } from '@core/modules/primeng/primeng.module';
import { SharedModule } from '@shared/shared.module';
import { ProyectoAddComponent } from './components/proyecto-add/proyecto-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProyectoContentComponent } from './pages/proyecto-content/proyecto-content.component';
import { ProyectoInfoComponent } from './components/proyecto-info/proyecto-info.component';
import { ProyectoResidenciasComponent } from './components/proyecto-residencias/proyecto-residencias.component';
import { ProyectoEspaciosComponent } from './components/proyecto-espacios/proyecto-espacios.component';
import { ProyectoAsignarComponent } from './components/proyecto-asignar/proyecto-asignar.component';

@NgModule({
  declarations: [
    ProyectosHomeComponent,
    ProyectoAddComponent,
    ProyectoContentComponent,
    ProyectoInfoComponent,
    ProyectoResidenciasComponent,
    ProyectoEspaciosComponent,
    ProyectoAsignarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProyectosRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class ProyectosModule { }
