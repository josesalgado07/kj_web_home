import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosModule)
      },
      {
        path: 'espacios',
        loadChildren: () => import('../espacios/espacios.module').then(m => m.EspaciosModule)
      },
      {
        path: 'multas',
        loadChildren: () => import('../multas/multas.module').then(m => m.MultasModule)
      },
      {
        path: 'proyectos',
        loadChildren: () => import('../proyectos/proyectos.module').then(m => m.ProyectosModule)
      },
      {
        path: '**',
        redirectTo: '../login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
