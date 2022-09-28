import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'kj-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input() information: any;

  filtrosSeleccionados = [];

  tableForm: FormGroup = this.fb.group({
    filtros: [''],
    busqueda: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  obtenerValor(rowData: any, col: string): string {
    return eval(`rowData.${col}`);
  }

}
