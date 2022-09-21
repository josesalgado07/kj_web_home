import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'kj-input-text',
  template: `
    <div>
      <span class="p-float-label">
      <input id="input-text" type="text" pInputText>
      <label for="input-text">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [
  ]
})
export class InputTextComponent implements OnInit {

  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
