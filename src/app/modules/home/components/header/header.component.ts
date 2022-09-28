import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = "Jose Salgado";
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          icon:'pi pi-fw pi-bars',
          command: () => {
            alert("Hola")
          }
      }
    ];
  }

}
