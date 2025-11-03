import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './modules/usuarios/crear-usuario/crear-usuario';
import { ListarRegistrosComponent } from './modules/usuarios/listar-registros/listar-registros';
import { LoginComponent } from './modules/auth/login/login';
import { CargaComponent } from './modules/carga-imagenes/carga/carga';
import { AdminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/nuevo',
    loadComponent: () => import('./modules/usuarios/crear-usuario/crear-usuario')
      .then(m => m.CrearUsuarioComponent),
    canActivate: [AdminGuard]},
  { path: 'usuarios', component: ListarRegistrosComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'carga', component: CargaComponent },
  { path: 'equipos/nuevo',
    loadComponent: () => import('./modules/equipos/crear-equipo')
      .then(m => m.CrearEquipo),
    canActivate: [AdminGuard]}
];