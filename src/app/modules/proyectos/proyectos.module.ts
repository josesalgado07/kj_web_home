import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosHomeComponent } from './pages/proyectos-home/proyectos-home.component';
import { PrimengModule } from '@core/modules/primeng/primeng.module';
import { SharedModule } from '@shared/shared.module';
import { ProyectoAddComponent } from './components/proyecto-add/proyecto-add.component';


@NgModule({
  declarations: [
    ProyectosHomeComponent,
    ProyectoAddComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class ProyectosModule { }
