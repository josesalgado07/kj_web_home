import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultasRoutingModule } from './multas-routing.module';
import { MultasPageComponent } from './pages/multas-page/multas-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MultasPageComponent
  ],
  imports: [
    CommonModule,
    MultasRoutingModule,
    SharedModule
  ]
})
export class MultasModule { }
