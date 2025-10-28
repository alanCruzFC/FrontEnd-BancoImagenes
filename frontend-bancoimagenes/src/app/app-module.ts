import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { AuthModule } from './modules/auth/auth-module';
import { CargaImagenesModule } from './modules/carga-imagenes/carga/carga-imagenes-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule,
    CargaImagenesModule
  ]
})
export class AppModule { }
