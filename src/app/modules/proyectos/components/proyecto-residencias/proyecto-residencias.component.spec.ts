import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoResidenciasComponent } from './proyecto-residencias.component';

describe('ProyectoResidenciasComponent', () => {
  let component: ProyectoResidenciasComponent;
  let fixture: ComponentFixture<ProyectoResidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoResidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoResidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
