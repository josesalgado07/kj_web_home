import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kj-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  public isDisplay = true;

  constructor() { }

  ngOnInit(): void {

    this.items = [{
            label: 'Options',
            items: [{
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                }
            }
            ]},
            {
                label: 'Navigate',
                items: [{
                    label: 'Angular Website',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload'
                }
            ]}
        ];
  }

}
