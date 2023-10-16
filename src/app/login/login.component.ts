import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isClicked: boolean = false;

  constructor(private router: Router,
    private loginService: LoginService
   ){
    
  }

  ngOnInit(): void {
   
  }

  login() {
    this.isClicked = true;
    this.loginService.login(this.username,this.password)
    // Add your login logic here, such as sending a request to your backend for authentication.
  }

  SignUp(){

    this.router.navigate(['/sign-up']);
  }

}
