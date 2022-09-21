import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';

@Component({
  selector: 'kj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword: boolean = true;

  loginForm: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public formErrors: FormErrorsService
  ) {
  }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigate(["/app/eventos"])
  }

  hide() {
    this.hidePassword = !this.hidePassword;
  }

  get form() {
    return this.loginForm.controls;
  }

  get usuario(): AbstractControl {
    return this.form['usuario'];
  }

  get contrasena() {
    return this.form['contrasena'];
  }
}
