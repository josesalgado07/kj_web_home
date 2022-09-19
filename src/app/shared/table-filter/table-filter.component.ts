import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'kj-table-filter',
  imports: [CommonModule],
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input() set information(value: any) {
    this._information = value;
  }

  get information(): any {
    return this._information;
  }

  private _information: any;

  filtrosSeleccionados = [];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerValor(rowData: any, col: string) {
    eval(`rowData.${col}`)
  }

}
