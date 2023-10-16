import { Injectable } from "@angular/core";
import { AuthenticationService } from "../authentication/authentication.service";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
  
    constructor(private authenticationService: AuthenticationService,
        private router: Router){

    }


    login(username:string, password: string){
        this.authenticationService.login(username,password);
    }
}