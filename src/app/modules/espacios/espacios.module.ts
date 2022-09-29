import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaciosRoutingModule } from './espacios-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EspaciosPageComponent } from './pages/espacios-page/espacios-page.component';

@NgModule({
  declarations: [
    EspaciosPageComponent
  ],
  imports: [
    CommonModule,
    EspaciosRoutingModule,
    SharedModule
  ]
})
export class EspaciosModule { }
