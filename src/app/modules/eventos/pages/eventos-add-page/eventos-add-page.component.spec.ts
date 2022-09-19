import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAddPageComponent } from './eventos-add-page.component';

describe('EventosAddPageComponent', () => {
  let component: EventosAddPageComponent;
  let fixture: ComponentFixture<EventosAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
