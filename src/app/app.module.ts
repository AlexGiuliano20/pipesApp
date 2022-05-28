import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Módulo personalizado
import { AppRouterModule } from './router/app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, VentasModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
