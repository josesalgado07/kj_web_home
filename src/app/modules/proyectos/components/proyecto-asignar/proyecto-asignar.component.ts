import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Propietario } from '@core/interfaces/propietario.interface';
import { ApartamentoService } from '@core/services/apartamento/apartamento.service';
import { ProyectoService } from '@core/services/proyecto/proyecto.service';
import { ToastService } from '@core/services/toast/toast.service';
import { FormErrorsService } from '@core/util/form-errors/form-errors.service';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'kj-proyecto-asignar',
  templateUrl: './proyecto-asignar.component.html',
  styleUrls: ['./proyecto-asignar.component.scss']
})
export class ProyectoAsignarComponent implements OnInit, OnDestroy {

  propietarioForm: FormGroup = this.fb.group({
    torre: [''],
    apartamento_id: ['', Validators.required],
    documento: ['', Validators.required]
  });
  
  tipoProyecto: number = 1;

  listaTorres: any = [];
  listaDisponibles: any = [];

  private destroy$ : Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private proyectoService: ProyectoService,
    private apartamentoService: ApartamentoService,
    public formErrors: FormErrorsService,
    private toastService: ToastService
  ) {
    this.tipoProyecto = this.proyectoService.proyectoSeleccionado?.proyecto_tipo_id!;
  }

  ngOnInit(): void {
    if (this.tipoProyecto === 1) {
      this.obtenerTorres();
      this.cambiarTorreSeleccionada();
    } else {
      this.obtenerDisponibles();
    }
  }

  cambiarTorreSeleccionada() {
    this.torre.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(change => {
        if (change) {
          this.obtenerDisponibles(change);
        }
      });
  }
  
  obtenerAptosDisponibles(torre: number) {
    this.apartamentoService
      .getDisponibles(this.proyectoService.proyectoSeleccionado?.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.listaDisponibles = response;
        },
        error: () => {},
        complete: () => {}
      })
  }

  obtenerDisponibles(torre?: number) {
    const request$ = (torre) ? 
      this.apartamentoService
        .getDisponiblesTorre(this.proyectoService.proyectoSeleccionado?.id!, torre) :
      this.apartamentoService
        .getDisponibles(this.proyectoService.proyectoSeleccionado?.id!);

    request$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.listaDisponibles = response;
        },
        error: () => {},
        complete: () => {}
      })
  }

  obtenerTorres() {
    this.apartamentoService
      .getTorres(this.proyectoService.proyectoSeleccionado?.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.listaTorres = response;
        },
        error: () => {},
        complete: () => {}
      });
  }

  asignar() {
    let datos: Propietario = {
      apartamento_id: this.propietarioForm.value.apartamento_id,
      documento: this.propietarioForm.value.documento
    };
    
    this.apartamentoService.asignar(datos)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.toastService.success(response.message);
        },
        error: (err) => {},
        complete: () => {
          this.propietarioForm.reset();
        },
      });
  }

  get form() {
    return this.propietarioForm.controls;
  }

  get documento() {
    return this.form['documento'];
  }

  get torre() {
    return this.form['torre'];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
