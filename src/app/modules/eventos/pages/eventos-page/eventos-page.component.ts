import { Component, OnInit, ViewChild } from '@angular/core';
import { EventosAddPageComponent } from '../eventos-add-page/eventos-add-page.component';

@Component({
  selector: 'kj-eventos-page',
  templateUrl: './eventos-page.component.html',
  styleUrls: ['./eventos-page.component.scss']
})
export class EventosPageComponent implements OnInit {

  @ViewChild('eventosAdd') eventosAddPageComponent!: EventosAddPageComponent;

  data = {
    headers: [{
      field: 'nombre',
      label: 'Nombre'
    }, {
      field: 'fecha',
      label: 'Fecha'
    }],
    data: [{
      nombre: 'Asamblea',
      fecha: '03/09/2022'
    }, {
      nombre: 'Reunión general',
      fecha: '05/09/2022'
    }]
  };

  timeNow = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.eventosAddPageComponent.showDialog();
  }

}
