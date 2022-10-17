import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
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
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.loadMenu();
    }

    loadMenu() {
        let rol = this.authService.rol;

        switch (rol) {
            case "1":
                break;
            case "2":
                this.items = [ this.menuAdmin ];
                break;
            case "3":
                this.items = [ this.menuConstructor ];
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            default:
                break;
        }
    }

    private get menuAdmin(): MenuItem {
        return {
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
                    this.router.navigate(["/app/multas"])
                }
            }, {
                label: 'Concejo',
                icon: 'pi pi-users',
                command: () => {
                }
            }]
        };
    }

    private get menuConstructor(): MenuItem {
        return {
            label: 'Constructor',
            items: [{
                label: 'Proyectos',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(["/app/proyectos"])
                }
            }]
        };
    }
}
