import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/services/usuario';
import { Router } from '@angular/router';
import { EquipoService } from '../../shared/services/equipo';

@Component({
  selector: 'app-crear-equipo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-equipo.html',
  styleUrl: './crear-equipo.scss',
})
export class CrearEquipo {
  form: FormGroup;
  usuarios: any[] = [];

  constructor (private fb: FormBuilder, private equipoService: EquipoService, private usuarioService: UsuarioService, private router: Router){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      jefeId: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.usuarioService.listar().subscribe({
      next: data => this.usuarios = data,
      error: err => alert('Error en la carga de los usarios')
    });
  }

  crear() {
    if (this.form.valid) {
      this.equipoService.crear(this.form.value).subscribe({
        next: msg => { alert(msg);
        this.router.navigate(['/equipos']);
        },
        error: err => alert('Error en la creacion del equipo')
      });
    }

  }
}
