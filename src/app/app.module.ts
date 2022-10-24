import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from '@modules/auth/pages/login/login.component';
import { PrimengModule } from '@core/modules/primeng/primeng.module';
import { RegistrarComponent } from '@modules/auth/pages/registrar/registrar.component';
import { SeleccionarRolComponent } from './modules/auth/components/seleccionar-rol/seleccionar-rol.component';
import { AuthInterceptor } from '@core/interceptor/auth.interceptor';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en');

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    SeleccionarRolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PrimengModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    SeleccionarRolComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
