import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  get isVisible(): boolean {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
  }

  get role() {
    return this.auth.getRole();
  }
}
