import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService} from '../../../shared/services/auth';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  showPassword = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    const input = document.querySelector('input[formControlName="password"]') as HTMLInputElement;
    const icon = document.querySelector('.eye-icon');
    if (input) {
      input.type = this.showPassword ? 'text' : 'password';
      icon?.classList.toggle('show-password', this.showPassword);
    }
  }

  login() {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe({
        next: ({ token }) => {
          localStorage.setItem('token', token);
          const role = this.auth.getRole();
          console.log(role);

          switch (role) {
            case 'ROLE_ADMIN':
              this.router.navigate(['/usuarios']);
              break;
            case 'ROLE_USER':
              this.router.navigate(['/carga']);
              break;
            case 'ROLE_SUPERVISOR':
              this.router.navigate(['/usuarios']);
              break;
            default:
              this.router.navigate(['/login']);
              break;
          }
        },
        error: (err) => {
          this.loading = false;
          if (err.status === 401) {
            alert('Credenciales inválidas');
          } else {
            alert('Error al iniciar sesión');
          }
        }
      });
    }
  }
}