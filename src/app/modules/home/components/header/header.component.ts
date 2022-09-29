import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() openMenu = new EventEmitter<any>();

  username: string = "Jose Salgado";
  
  constructor() { }

  show(event: any) {
    this.openMenu.emit(event);
  }
  
  ngOnInit(): void {
  }

}
