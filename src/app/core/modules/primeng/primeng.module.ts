import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    MenuModule,
    PanelModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    MultiSelectModule,
    TableModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    MenuModule,
    PanelModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    MultiSelectModule,
    TableModule
  ]
})
export class PrimengModule { }
