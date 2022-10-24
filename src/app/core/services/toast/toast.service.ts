import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) {}

  warning(message: string) {
    this.messageService.add({
      severity:'warn',
      // summary:'Service Message',
      detail: message
    });
  }

  success(message: string) {
    this.messageService.add({
      severity:'success',
      detail: message
    });
  }
}
