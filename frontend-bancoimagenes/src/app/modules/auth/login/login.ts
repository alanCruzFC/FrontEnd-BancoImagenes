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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe({
        next: ({ token }) => {
          localStorage.setItem('token', token );
          const role = this.auth.getRole();
          console.log(role);
          if (role === 'ROLE_ADMIN') {
            this.router.navigate(['/usuarios']);
          } else {
            this.router.navigate(['/carga']);
          }
        },
        error: () => alert('Credenciales invalidas')
      });
    }
  }
}
