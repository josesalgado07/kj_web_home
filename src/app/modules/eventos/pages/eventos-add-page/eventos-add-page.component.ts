import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';

@Component({
  selector: 'kj-eventos-add-page',
  templateUrl: './eventos-add-page.component.html',
  styleUrls: ['./eventos-add-page.component.scss']
})
export class EventosAddPageComponent implements OnInit {

  showModal = false;
  minDate = new Date();

  eventoForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    destinatarios: ['', Validators.required],
    fecha: [new Date(), Validators.required],
    tipo: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public formErrors: FormErrorsService
  ) { }

  ngOnInit(): void {
  }

  registrar() {
    this.showModal = false;
    //TODO validar formulario y registrar evento en bd
  }

  showDialog() {
    this.showModal = true;
  }
  
  reset() {
    this.eventoForm.reset();
    this.fecha.setValue(new Date());
  }

  get form() {
    return this.eventoForm.controls;
  }

  get nombre() {
    return this.form['nombre'];
  }

  get destinatarios() {
    return this.form['destinatarios'];
  }

  get fecha() {
    return this.form['fecha'];
  }

  get tipo() {
    return this.form['tipo'];
  }

  get descripcion() {
    return this.form['descripcion'];
  }

}
