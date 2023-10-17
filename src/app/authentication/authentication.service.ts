import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

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
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong credentials',
                    timer: 2500
                  })
            }
          },
          (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>',
                timer: 2500
              })
            console.error('POST request error:', error);
          }
        );
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userCredentials');
        if(this.isLoggedUser != undefined)
            this.isLoggedUser.next({});
    }

    signUp(user: User){
        this.http.post<any>(this.url+`/api/Auth/register`, user).subscribe(
            (data) => {
              debugger
              if(data.data == 'User is created') {

                Swal.fire({
                    icon: 'success',
                    title: 'User is created!',
                    showConfirmButton: false,
                    timer: 2500
                  })
                  
                 this.router.navigate(["/login"])
              }
            },
            (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 2500
                  })
              console.error('POST request error:', error);
            }
          );
    }

}