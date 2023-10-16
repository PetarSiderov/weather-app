import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private isLoggedUser: BehaviorSubject<any> | undefined;

    constructor() {
        this.isLoggedUser = new BehaviorSubject<User>(new User());
    }

    public getUserStatus(): User {
        this.isLoggedUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("userCredentials") || '{}'))
        return new User();
    }

    login(username: string, password: string){

    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        if(this.isLoggedUser != undefined)
            this.isLoggedUser.next(null);
    }

}