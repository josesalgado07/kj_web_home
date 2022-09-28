import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@core/modules/primeng/primeng.module';
import { InputTextComponent } from './input-text/input-text.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    InputTextComponent,
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    PrimengModule,
    TranslateModule,
    InputTextComponent,
    TableFilterComponent
  ]
})
export class SharedModule { }
