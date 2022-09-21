import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosPageComponent } from './pages/eventos-page/eventos-page.component';
import { EventosAddPageComponent } from './pages/eventos-add-page/eventos-add-page.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';
import { CalendarComponent } from 'src/app/shared/calendar/calendar.component';
import { TableFilterComponent } from 'src/app/shared/table-filter/table-filter.component';

import { CardModule } from 'primeng/card';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    EventosPageComponent,
    EventosAddPageComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    FormsModule,
    CardModule,

    //standalone components
    CalendarComponent,
    TableFilterComponent,
    SharedModule
  ]
})
export class EventosModule { }
