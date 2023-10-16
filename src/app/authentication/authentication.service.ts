import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public isLoggedUser: Subject<any> | undefined;
    private url = 'https://localhost:7076'

    constructor(private http: HttpClient,
        private router: Router) {
            this.isLoggedUser = new Subject<any>();
    }

    public getUserStatus(): User {
        return JSON.parse(localStorage.getItem("userCredentials") || '{}');
    }

    login(username: string, password: string){
        var user = new User();
        user.username = username;
        user.password = password;
        
        this.http.post<any>(this.url+`/api/Auth/sign-in`, user).subscribe(
          (data) => {
            debugger
            if(data.token != null){
                user.token = data.token
                user.password = ''
                localStorage.setItem("userCredentials", JSON.stringify(user))
                this.isLoggedUser?.next(JSON.parse(localStorage.getItem("userCredentials") || '{}'))
            }
          },
          (error) => {
            console.error('POST request error:', error);
          }
        );
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        if(this.isLoggedUser != undefined)
            this.isLoggedUser.next(null);
    }

}