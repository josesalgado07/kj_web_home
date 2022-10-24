import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEspaciosComponent } from './proyecto-espacios.component';

describe('ProyectoEspaciosComponent', () => {
  let component: ProyectoEspaciosComponent;
  let fixture: ComponentFixture<ProyectoEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
