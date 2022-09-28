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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
