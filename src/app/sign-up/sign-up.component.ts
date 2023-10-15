import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';

  signup() {
    debugger
    console.log(this.username)
    // Add your login logic here, such as sending a request to your backend for authentication.
  }
}
