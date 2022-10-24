import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoAddComponent } from './components/proyecto-add/proyecto-add.component';
import { ProyectoContentComponent } from './pages/proyecto-content/proyecto-content.component';
import { ProyectosHomeComponent } from './pages/proyectos-home/proyectos-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosHomeComponent
  },
  {
    path: 'add',
    component: ProyectoAddComponent
  },
  {
    path: 'content',
    component: ProyectoContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
