import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosPageComponent } from './pages/eventos-page/eventos-page.component';
import { EventosAddPageComponent } from './pages/eventos-add-page/eventos-add-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from 'src/app/shared/calendar/calendar.component';

import { CardModule } from 'primeng/card';
import { SharedModule } from '@shared/shared.module';

import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    EventosPageComponent,
    EventosAddPageComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,

    //standalone components
    CalendarComponent,
    SharedModule,

    //primeng modules
    CalendarModule,
    DialogModule
  ]
})
export class EventosModule { }
