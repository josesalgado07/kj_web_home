import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kj_web_home';

  constructor(
    private translate: TranslateService,
    private primengConfig: PrimeNGConfig
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.primengConfig.ripple = true;
  }
}