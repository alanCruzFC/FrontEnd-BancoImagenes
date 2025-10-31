import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../shared/services/usuario';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.scss',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, CommonModule]
})
export class CrearUsuarioComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router){
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required]
    });
  }

  crear() {
    if (this.form.valid) {
      this.usuarioService.crear(this.form.value).subscribe({
        next: msg => {alert(msg);
        this.router.navigate(['/usuarios']);
        },
        error: err => alert('Error en la creacion del usuario')
      });
    }
  }
}
