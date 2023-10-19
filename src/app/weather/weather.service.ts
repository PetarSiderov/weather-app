import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { WeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://localhost:7076';

  constructor(private http: HttpClient,
        private router: Router) { }


  getWeatherPrediction(cityName: string): Observable<WeatherResponse>{
    const weather = `${this.url}/WeatherForecast/WeatherSearch?city=${cityName}`;
    return this.http.get<WeatherResponse>(weather)
  }
}
