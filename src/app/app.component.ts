import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { DeferBlockTemplateDependency } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Component implements OnInit {
  title = 'weather-app';
  userStats: any;
  isLogged: boolean = false;
  /**
   *
   */
  constructor(private authservice: AuthenticationService, private router: Router) {
    super({});
    this.userStats = authservice.getUserStatus();
    if (Object.keys(this.userStats).length) {
      // authorised so return true
      this.isLogged = true;
    }
  }
  ngOnInit(): void {
    this.authservice.isLoggedUser?.subscribe(s => {
      if (Object.keys(s).length) {
        this.isLogged = true;
        this.router.navigate(["/weather"])
      }
      else{
        this.isLogged = false;
        this.router.navigate(['/login'])
      }
    })
  }
}
