import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { WeatherResponse } from '../models/weather.model';
import { CitySimplier } from '../models/city.simpler.model';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://localhost:7076';
  private user: User;
  constructor(private http: HttpClient,
        private router: Router) {
            this.user = JSON.parse(localStorage.getItem("userCredentials") || '{}');
        }


  getWeatherPrediction(cityName: string): Observable<WeatherResponse>{
        // Set up headers with the JWT token
    const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.user.token}`
    });
    if(cityName == ''){
      cityName = 'all'
    }
    const weather = `${this.url}/WeatherForecast/WeatherSearch?city=${cityName}`;
    return this.http.get<WeatherResponse>(weather, { headers: headers })
  }

  getAllCities(value: string): Observable<CitySimplier[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.user.token}`
    });
    const weather = `${this.url}/WeatherForecast/GetAllCities?cityName=${value}`;
    return this.http.get<CitySimplier[]>(weather,{ headers })
  }
}
