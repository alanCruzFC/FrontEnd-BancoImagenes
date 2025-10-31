import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { AuthModule } from './modules/auth/auth-module';
import { CargaImagenesModule } from './modules/carga-imagenes/carga/carga-imagenes-module';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule,
    CargaImagenesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: []
      }
    })
  ]
})
export class AppModule { }
