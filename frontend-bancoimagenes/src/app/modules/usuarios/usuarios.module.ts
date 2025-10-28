import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario';
import { ListarRegistrosComponent } from './listar-registros/listar-registros';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CrearUsuarioComponent,
    ListarRegistrosComponent
  ],
  exports: [
    CrearUsuarioComponent,
    ListarRegistrosComponent
  ]
})
export class UsuariosModule {}
