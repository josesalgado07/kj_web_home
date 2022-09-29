import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from '@modules/home/components/menu/menu.component';

@Component({
  selector: 'kj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('menuC') menuComponent!: MenuComponent;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(show: any) {
    this.menuComponent.menu.toggle(show);
  }

}
