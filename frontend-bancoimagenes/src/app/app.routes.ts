import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './modules/usuarios/crear-usuario/crear-usuario';
import { ListarRegistrosComponent } from './modules/usuarios/listar-registros/listar-registros';
import { LoginComponent } from './modules/auth/login/login';
import { CargaComponent } from './modules/carga-imagenes/carga/carga';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/nuevo', component: CrearUsuarioComponent },
  { path: 'usuarios', component: ListarRegistrosComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'carga', component: CargaComponent }
];
