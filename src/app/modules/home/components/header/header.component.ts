import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() openMenu = new EventEmitter<any>();

  username: string = "";
  items: MenuItem[] = [];

  constructor(
    private authService: AuthService
  ) { }

  show(event: any) {
    this.openMenu.emit(event);
  }
  
  ngOnInit(): void {
    this.username = this.authService.username;
    this.loadItemMenu();
  }

  loadItemMenu() {
    this.items = [{
      label: 'Cerrar sesión',
      icon: 'pi pi-power-off',
      command: () => {
        this.authService.logout();
      }
    }];
  }

}
