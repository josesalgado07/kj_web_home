import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { MenubarModule } from "primeng/menubar";
import { PrimengModule } from '@core/modules/primeng/primeng.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    PrimengModule
  ]
})
export class HomeModule { }
