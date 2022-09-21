import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';

@Component({
  selector: 'kj-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  hidePassword: boolean = true;

  registroForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
    confirmacion: ['', Validators.required]
  }, {
    validator: this.formErrors.confirmedValidator('contrasena', 'confirmacion'),
  });

  constructor(
    private fb: FormBuilder,
    public formErrors: FormErrorsService
  ) { }

  ngOnInit(): void {
  }

  registrar() {
    
  }

  hide() {
    this.hidePassword = !this.hidePassword;
  }

  get form() {
    return this.registroForm.controls;
  }

  get nombre(): AbstractControl {
    return this.form['nombre']
  }

  get apellido(): AbstractControl {
    return this.form['apellido']
  }

  get usuario(): AbstractControl {
    return this.form['usuario']
  }

  get contrasena(): AbstractControl {
    return this.form['contrasena']
  }

  get confirmacion(): AbstractControl {
    return this.form['confirmacion']
  }
  
}
