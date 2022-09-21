import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorsService {

  constructor() { }

  public errorMsg(form: FormGroup, controlName: string) {
    let errorName = Object.keys(form.controls[controlName].errors!)[0];
    let error: any = Object.values(form.controls[controlName].errors!)[0];

    const mensajes: any = {
      required: () => 'required',
      pattern: () => 'pattern',
      minlength: () => 'minlength',
      maxlength: () => 'maxlength'
    };

    return mensajes[errorName](error);
  }

  public mostrarError(form: FormGroup, controlName: string) {
    let controlForm = form.controls[controlName];
    if (!controlForm.errors) return false;
    return controlForm.hasError(Object.keys(controlForm.errors)[0]);
  }

  /**
   * Compara si dos valores dentro de un formulario coinciden
   */
  public confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
