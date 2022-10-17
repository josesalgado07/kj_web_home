import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioLogin } from '@core/interfaces/usuario.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { ToastService } from '@core/services/toast/toast.service';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';
import { SeleccionarRolComponent } from '@modules/auth/components/seleccionar-rol/seleccionar-rol.component';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'kj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  hidePassword: boolean = true;

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    public formErrors: FormErrorsService,
    private authService: AuthService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario: UsuarioLogin = {
      ...this.loginForm.value
    }

    this.authService.login(usuario)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          if (response.jwt) {
            const { jwt } = response;
            this.authService.jwt = jwt;
            this.showSelect();
          }
        },
        error: (e) => {
          this.toastService.warning(e.error.message);
        },
        complete: () => { }
      });
  }

  showSelect() {
    let decodedJWT = this.authService.jwt;
    let roles = decodedJWT.usuario.roles;
    
    if (roles.length > 1) {
      let header = this.translate.instant('LOGIN.txtSelectRol');
      const ref = this.dialogService.open(SeleccionarRolComponent, {
        data: {
          roles
        },
        header,
        width: '40%'
      });

      ref.onClose
        .pipe(takeUntil(this.destroy$))
        .subscribe((rol: number) => {
          if (rol) {
            this.authService.switchRole(rol);
          }
        });
    } else {
      this.authService.switchRole(roles[0].id);
    }
  }

  hide() {
    this.hidePassword = !this.hidePassword;
  }

  get form() {
    return this.loginForm.controls;
  }

  get email(): AbstractControl {
    return this.form['email'];
  }

  get password() {
    return this.form['password'];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
