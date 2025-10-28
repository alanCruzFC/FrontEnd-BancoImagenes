import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../shared/services/usuario';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.html',
  styleUrl: './listar-registros.scss',
})
export class ListarRegistrosComponent implements OnInit {
  usuarios: Usuario[] = [];
  
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listar().subscribe({
      next: data => this.usuarios = data,
      error: err => alert('Error en la carga de usuarios')
    });
  }

}
