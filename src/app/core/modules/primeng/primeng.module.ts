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
import { AutoFocusModule } from 'primeng/autofocus';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
  ],
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
    TableModule,
    AutoFocusModule,
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    SplitButtonModule,
    DropdownModule
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
    TableModule,
    AutoFocusModule,
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    SplitButtonModule,
    DropdownModule
  ],
  providers: [
    DialogService,
    MessageService
  ]
})
export class PrimengModule { }
