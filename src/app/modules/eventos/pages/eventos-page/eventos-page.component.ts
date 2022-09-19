import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kj-eventos-page',
  templateUrl: './eventos-page.component.html',
  styleUrls: ['./eventos-page.component.scss']
})
export class EventosPageComponent implements OnInit {

  data = {
    headers: [{
      field: 'id',
      label: 'Id',
      hidden: true
    }, {
      field: 'nombre',
      label: 'Nombre'
    }, {
      field: 'fecha',
      label: 'Fecha'
    }],
    data: [{
      id: 1,
      nombre: 'Asamblea',
      fecha: '03/09/2022'
    }, {
      id: 2,
      nombre: 'Reunión general',
      fecha: '05/09/2022'
    }]
  };

  timeNow = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
