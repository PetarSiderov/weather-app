import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isClicked: boolean = false;

  constructor(private router: Router){
    
  }

  login() {
    this.isClicked = true
    // Add your login logic here, such as sending a request to your backend for authentication.
  }

  SignUp(){

    this.router.navigate(['/sign-up']);
  }

}
