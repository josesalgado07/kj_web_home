import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoContentComponent } from './proyecto-content.component';

describe('ProyectoContentComponent', () => {
  let component: ProyectoContentComponent;
  let fixture: ComponentFixture<ProyectoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
