import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'kj-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    
    items: MenuItem[] = [];

    constructor(private router: Router) { }

    ngOnInit(): void {
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
