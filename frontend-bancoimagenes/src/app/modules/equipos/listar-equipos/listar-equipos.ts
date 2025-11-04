import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipoService } from '../../../shared/services/equipo';
import { Equipo } from '../../../models/equipo.model';

@Component({
  standalone:true,
  selector: 'app-listar-equipos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listar-equipos.html',
  styleUrl: './listar-equipos.scss',
})
export class ListarEquipos  implements OnInit{
  equipos: Equipo[] = [];
  
  constructor(private equipoService: EquipoService) {}

  ngOnInit() {
    this.equipoService.listar().subscribe({
      next: data => {
        console.log(data);
       this.equipos = data;
      },
      error: err => alert('Error en la carga de usuarios')
      
    });
    
  }

}