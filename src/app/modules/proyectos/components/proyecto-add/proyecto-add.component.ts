import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Denominacion } from '@core/interfaces/denominacion.interface';
import { Estrato } from '@core/interfaces/estrato.interface';
import { Proyecto, ProyectoTipo } from '@core/interfaces/proyecto.interface';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { ToastService } from '@core/services/toast/toast.service';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'kj-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.scss']
})
export class ProyectoAddComponent implements OnInit, OnDestroy {

  proyectoForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    proyecto_tipo_id: ['', Validators.required],
    direccion: ['', Validators.required],
    estrato_id: ['', Validators.required],
    comuna: ['', Validators.required],

    denominacion_id: ['', Validators.required],
    cantidad_torres: [0, [Validators.required, Validators.min(1)]],
    cantidad_pisos: [0],
    cantidad_apartamentos: [0],
  });

  listaTipos$: Observable<ProyectoTipo[]>;
  isApartments: boolean = true;
  listaEstratos$: Observable<Estrato[]>;
  listaDenominacion$: Observable<Denominacion[]>;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    public formErrors: FormErrorsService,
    private proyectoService: ProyectoService,
    private toastService: ToastService
  ) {
    this.listaTipos$ = this.proyectoService.getTipos();
    this.listaEstratos$ = this.proyectoService.getEstratos();
    this.listaDenominacion$ = this.proyectoService.getDenominacion();
  }

  ngOnInit(): void {
    this.cambiarTipoProyecto();
  }

  cambiarTipoProyecto() {
    this.tipo.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(change => {
      if (change) {
        this.isApartments = (change == 1);

        if (this.isApartments) {
          this.cantidad_pisos.setValidators([Validators.required, Validators.min(1)]);
          this.cantidad_apartamentos.setValidators([Validators.required, Validators.min(1)]);
        } else {
          this.cantidad_pisos.setValue(0);
          this.cantidad_pisos.clearValidators();
          this.cantidad_apartamentos.setValue(0);
          this.cantidad_apartamentos.clearValidators();
        }
        this.cantidad_pisos.updateValueAndValidity();
        this.cantidad_apartamentos.updateValueAndValidity();
      }
    });
  }

  registrar() {
    let datos: Proyecto = { ...this.proyectoForm.value };

    this.proyectoService.guardar(datos)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response: any) => {
        this.toastService.success(response.message);
      },
      error: (error) => {
      },
      complete: () => {
        this.proyectoForm.reset();
      }
    })
    
  }

  get form() {
    return this.proyectoForm.controls;
  }

  get nombre() {
    return this.form['nombre'];
  }

  get tipo() {
    return this.form['proyecto_tipo_id'];
  }

  get direccion() {
    return this.form['direccion'];
  }
  
  get comuna() {
    return this.form['comuna'];
  }

  get cantidad_torres() {
    return this.form['cantidad_torres'];
  }

  get cantidad_pisos() {
    return this.form['cantidad_pisos'];
  }

  get cantidad_apartamentos() {
    return this.form['cantidad_apartamentos'];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
