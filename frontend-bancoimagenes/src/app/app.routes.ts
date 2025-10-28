import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './modules/usuarios/crear-usuario/crear-usuario';
import { ListarRegistrosComponent } from './modules/usuarios/listar-registros/listar-registros';

export const routes: Routes = [
  { path: 'usuarios/nuevo', component: CrearUsuarioComponent },
  { path: 'registros', component: ListarRegistrosComponent },
  { path: '', redirectTo: 'registros', pathMatch: 'full' }
];
