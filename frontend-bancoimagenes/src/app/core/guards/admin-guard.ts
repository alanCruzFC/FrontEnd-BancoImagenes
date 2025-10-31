import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private JwtHelperService){}

    canActivate(): boolean {
        const token = localStorage.getItem('token');

        if(!token || this.jwtHelper.isTokenExpired(token)) {
            this.router.navigate(['/login']);
            return false
        }

        const decodedToken = this.jwtHelper.decodedToken(token);
        const role = decodedToken?.role;

        if(role === 'ROLE_ADMIN'){
            return true;
        }

        this.router.navigate(['/noautorizado']);
        return false;
    }
}