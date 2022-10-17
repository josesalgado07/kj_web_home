import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultasPageComponent } from './multas-page.component';

describe('MultasPageComponent', () => {
  let component: MultasPageComponent;
  let fixture: ComponentFixture<MultasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
