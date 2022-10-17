import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoAddComponent } from './components/proyecto-add/proyecto-add.component';
import { ProyectosHomeComponent } from './pages/proyectos-home/proyectos-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosHomeComponent
  },
  {
    path: 'add',
    component: ProyectoAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
