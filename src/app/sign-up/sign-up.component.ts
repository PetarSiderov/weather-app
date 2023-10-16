import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  isClicked: boolean = false;
  /**
   *
   */
  constructor(private router: Router) {
    
  }

  signup() {
    debugger
    this.isClicked = true;
    console.log(this.username)
    // Add your login logic here, such as sending a request to your backend for authentication.
  }

  backToLogin(){
    this.router.navigate(['/login'])
  }
}
