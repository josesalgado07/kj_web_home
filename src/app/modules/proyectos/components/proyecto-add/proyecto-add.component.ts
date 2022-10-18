import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoTipo } from '@core/interfaces/proyecto.interface';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'kj-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.scss']
})
export class ProyectoAddComponent implements OnInit {

  proyectoForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    direccion: ['', Validators.required],
    estrato: ['', Validators.required],
    comuna: ['', Validators.required]
  });

  listaTipos$: Observable<any>;
  listaEstratos$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    public formErrors: FormErrorsService,
    private proyectoService: ProyectoService
  ) {
    this.listaTipos$ = this.proyectoService.getTipos();
    this.listaEstratos$ = this.proyectoService.getEstratos();
  }

  ngOnInit(): void {
  }

  registrar() {

  }

  get form() {
    return this.proyectoForm.controls;
  }

  get nombre() {
    return this.form['nombre'];
  }

  get tipo() {
    return this.form['tipo'];
  }

  get direccion() {
    return this.form['direccion'];
  }

}
