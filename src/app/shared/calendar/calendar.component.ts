import { Component, Input, OnInit } from '@angular/core';

import { CalendarModule } from "primeng/calendar";

@Component({
  standalone: true,
  selector: 'kj-calendar',
  imports: [CalendarModule],
  template: `
    <div>
      <span class="p-float-label">
        <p-calendar inputId="calendar"></p-calendar>
        <label for="calendar">{{ label }}</label>
      </span>
    </div>
  `,
  styles: []
})
export class CalendarComponent implements OnInit {

  @Input() label: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
