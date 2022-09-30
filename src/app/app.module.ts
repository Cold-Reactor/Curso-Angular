import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localEs from '@angular/common/locales/es-MX' // Todo: Se importa la libreria del idioma
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs); //TODO: Se registra en el la aplicacion para poder declararlo
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'} //TODO: Se declara el lenguaje por defecto de la aplicacion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
