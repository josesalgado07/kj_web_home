import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
    selector: 'kj-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @ViewChild('menu') menu!: Menu;
    @Input('popup') popup: boolean = false;

    items: MenuItem[] = [];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadMenu();
    }

    loadMenu() {
        this.items = [{
            label: 'Administrador',
            items: [{
                label: 'Eventos',
                icon: 'pi pi-calendar',
                command: () => {
                    this.router.navigate(["/app/eventos"])
                }
            }, {
                label: 'Espacios',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(["/app/espacios"])
                }
            }, {
                label: 'Comunicados',
                icon: 'pi pi-comments',
                command: () => {
                }
            }, {
                label: 'Multas',
                icon: 'pi pi-ticket',
                command: () => {
                }
            }, {
                label: 'Concejo',
                icon: 'pi pi-users',
                command: () => {
                }
            }
            ]
        }];
    }
}
