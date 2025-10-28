import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../shared/services/usuario';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.html',
  styleUrl: './listar-registros.scss',
  imports: [CommonModule, ReactiveFormsModule]
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
