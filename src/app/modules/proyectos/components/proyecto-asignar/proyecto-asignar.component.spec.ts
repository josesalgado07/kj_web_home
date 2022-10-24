import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoAsignarComponent } from './proyecto-asignar.component';

describe('ProyectoAsignarComponent', () => {
  let component: ProyectoAsignarComponent;
  let fixture: ComponentFixture<ProyectoAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoAsignarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
