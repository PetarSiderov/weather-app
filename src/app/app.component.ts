import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { DeferBlockTemplateDependency } from '@angular/compiler';

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
  constructor(private authservice: AuthenticationService) {
    super({});
    this.userStats = authservice.getUserStatus();
    if (Object.keys(this.userStats).length) {
      // authorised so return true
      this.isLogged = true;
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
