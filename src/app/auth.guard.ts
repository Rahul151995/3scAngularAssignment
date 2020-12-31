import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ) {
        let token: any = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}