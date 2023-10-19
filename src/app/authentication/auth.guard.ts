import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.getUserStatus();
        if (Object.keys(currentUser).length) {
            // authorised so return true
            if(state.url == '/' || state.url == '/login' || state.url == '/sign-up'){
                this.router.navigate(['/weather'])
                return false;
            }
            return true;
        }
        else { 
            if(state.url == '/login' || state.url == '/sign-up'){
                return true;
            }
            this.router.navigate(['/login'])
            return false;
        }
    }
}