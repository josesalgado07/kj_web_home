import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosAddPageComponent } from './pages/eventos-add-page/eventos-add-page.component';
import { EventosPageComponent } from './pages/eventos-page/eventos-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventosPageComponent
  },
  {
    path: 'registrar',
    component: EventosAddPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
