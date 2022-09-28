import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosPageComponent } from './espacios-page.component';

describe('EspaciosPageComponent', () => {
  let component: EspaciosPageComponent;
  let fixture: ComponentFixture<EspaciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
