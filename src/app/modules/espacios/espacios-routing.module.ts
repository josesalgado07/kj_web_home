import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaciosPageComponent } from './pages/espacios-page/espacios-page.component';

const routes: Routes = [
  {
    path: '',
    component: EspaciosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaciosRoutingModule { }
