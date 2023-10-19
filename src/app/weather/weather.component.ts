import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {WeatherService} from './weather.service'
import { WeatherResponse } from '../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
    convertDate(date: any){
        return new Date(date* 1000).toDateString();
    }
    daily = [
      {
          dt: new Date(1697623200* 1000).toDateString(),
          sunrise: 1697604561,
          sunset: 1697644161,
          moonrise: 1697618820,
          moonset: 1697650860,
          moon_phase: 0.12,
          summary: "There will be partly cloudy today",
          temp: {
              day: 289.42,
              min: 282.05,
              max: 291.73,
              night: 284.99,
              eve: 287.84,
              morn: 283.95
          },
          feels_like: {
              day: 288.7,
              night: 284.27,
              eve: 287.06,
              morn: 283.38
          },
          pressure: 1018,
          humidity: 61,
          dew_point: 280.98,
          wind_speed: 3.07,
          wind_deg: 101,
          wind_gust: 3.43,
          weather: [
              {
                  id: 803,
                  main: "Clouds",
                  description: "broken clouds",
                  icon: "04d"
              }
          ],
          clouds: 65,
          pop: 0,
          uvi: 3.17
      },
      {
          dt: new Date(1697709600).toDateString(),
          sunrise: 1697691031,
          sunset: 1697730468,
          moonrise: 1697709420,
          moonset: 1697740080,
          moon_phase: 0.15,
          summary: "You can expect partly cloudy in the morning, with clearing in the afternoon",
          temp: {
              day: 291.28,
              min: 283.22,
              max: 293.91,
              night: 286.24,
              eve: 290.43,
              morn: 283.22
          },
          feels_like: {
              day: 290.64,
              night: 285.82,
              eve: 289.83,
              morn: 282.66
          },
          pressure: 1016,
          humidity: 57,
          dew_point: 281.95,
          wind_speed: 3.54,
          wind_deg: 79,
          wind_gust: 3.57,
          weather: [
              {
                  id: 804,
                  main: "Clouds",
                  description: "overcast clouds",
                  icon: "04d"
              }
          ],
          clouds: 87,
          pop: 0,
          uvi: 3.59
      },
      {
          dt: 1697796000,
          sunrise: 1697777501,
          sunset: 1697816776,
          moonrise: 1697799600,
          moonset: 1697830020,
          moon_phase: 0.19,
          summary: "There will be clear sky until morning, then partly cloudy",
          temp: {
              day: 294.15,
              min: 284.75,
              max: 300.83,
              night: 288.98,
              eve: 294.99,
              morn: 284.79
          },
          feels_like: {
              day: 293.77,
              night: 288.5,
              eve: 294.25,
              morn: 284.52
          },
          pressure: 1010,
          humidity: 56,
          dew_point: 284.45,
          wind_speed: 3.64,
          wind_deg: 65,
          wind_gust: 3.65,
          weather: [
              {
                  id: 803,
                  main: "Clouds",
                  description: "broken clouds",
                  icon: "04d"
              }
          ],
          clouds: 58,
          pop: 0,
          uvi: 3.61
      },
      {
          dt: 1697882400,
          sunrise: 1697863972,
          sunset: 1697903086,
          moonrise: 1697889300,
          moonset: 1697920560,
          moon_phase: 0.22,
          summary: "You can expect partly cloudy in the morning, with rain in the afternoon",
          temp: {
              day: 294.31,
              min: 287,
              max: 301.63,
              night: 288.88,
              eve: 294.49,
              morn: 287
          },
          feels_like: {
              day: 293.81,
              night: 288.91,
              eve: 294.12,
              morn: 286.69
          },
          pressure: 1008,
          humidity: 51,
          dew_point: 282.92,
          wind_speed: 7.52,
          wind_deg: 286,
          wind_gust: 15.05,
          weather: [
              {
                  id: 500,
                  main: "Rain",
                  description: "light rain",
                  icon: "10d"
              }
          ],
          clouds: 98,
          pop: 1,
          rain: 3.71,
          uvi: 3.25
      },
      {
          dt: 1697968800,
          sunrise: 1697950443,
          sunset: 1697989396,
          moonrise: 1697978280,
          moonset: 1698011580,
          moon_phase: 0.25,
          summary: "Expect a day of partly cloudy with rain",
          temp: {
              day: 292.86,
              min: 288.83,
              max: 296.86,
              night: 289.88,
              eve: 295.82,
              morn: 288.86
          },
          feels_like: {
              day: 292.64,
              night: 289.25,
              eve: 295.45,
              morn: 288.78
          },
          pressure: 1013,
          humidity: 67,
          dew_point: 285.72,
          wind_speed: 2.69,
          wind_deg: 271,
          wind_gust: 2.86,
          weather: [
              {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d"
              }
          ],
          clouds: 90,
          pop: 1,
          rain: 4.51,
          uvi: 3.08
      },
      {
          dt: 1698055200,
          sunrise: 1698036914,
          sunset: 1698075708,
          moonrise: 1698066840,
          moonset: 0,
          moon_phase: 0.3,
          summary: "Expect a day of partly cloudy with clear spells",
          temp: {
              day: 295.08,
              min: 288.03,
              max: 297.31,
              night: 289.64,
              eve: 295.36,
              morn: 288.03
          },
          feels_like: {
              day: 294.43,
              night: 288.89,
              eve: 294.73,
              morn: 287.35
          },
          pressure: 1018,
          humidity: 42,
          dew_point: 280.88,
          wind_speed: 2.21,
          wind_deg: 69,
          wind_gust: 2.5,
          weather: [
              {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01d"
              }
          ],
          clouds: 6,
          pop: 0,
          uvi: 4
      },
      {
          dt: 1698141600,
          sunrise: 1698123385,
          sunset: 1698162020,
          moonrise: 1698155040,
          moonset: 1698102660,
          moon_phase: 0.33,
          summary: "There will be partly cloudy today",
          temp: {
              day: 293.14,
              min: 287.25,
              max: 296.93,
              night: 290.3,
              eve: 295.47,
              morn: 287.25
          },
          feels_like: {
              day: 292.45,
              night: 289.59,
              eve: 294.88,
              morn: 286.47
          },
          pressure: 1021,
          humidity: 48,
          dew_point: 280.93,
          wind_speed: 2.29,
          wind_deg: 65,
          wind_gust: 2.07,
          weather: [
              {
                  id: 803,
                  main: "Clouds",
                  description: "broken clouds",
                  icon: "04d"
              }
          ],
          clouds: 67,
          pop: 0,
          uvi: 4
      },
      {
          dt: 1698228000,
          sunrise: 1698209857,
          sunset: 1698248334,
          moonrise: 1698242940,
          moonset: 1698193740,
          moon_phase: 0.37,
          summary: "There will be partly cloudy today",
          temp: {
              day: 290.63,
              min: 288.9,
              max: 292.94,
              night: 289.72,
              eve: 291.55,
              morn: 288.9
          },
          feels_like: {
              day: 290.13,
              night: 289.23,
              eve: 291.06,
              morn: 288.38
          },
          pressure: 1017,
          humidity: 65,
          dew_point: 283.23,
          wind_speed: 2.09,
          wind_deg: 246,
          wind_gust: 2.36,
          weather: [
              {
                  id: 804,
                  main: "Clouds",
                  description: "overcast clouds",
                  icon: "04d"
              }
          ],
          clouds: 100,
          pop: 0,
          uvi: 4
      }
  ]

  weatherFromApi?: WeatherResponse;
  searchForm: FormGroup;
  cityName?: string;
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService,
    private renderer: Renderer2, private elementRef: ElementRef) {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''] // Initialize with an empty string
    });
  }

  performSearch() {
    const searchQuery = this.searchForm.getRawValue().searchQuery;
    debugger
    // You can implement your search logic here, e.g., call a search service or display the search results.
    this.weatherService.getWeatherPrediction(searchQuery).subscribe((data: any) => {
            debugger
            this.weatherFromApi = data;
            this.cityName = data.cityName;
            let element;
            if(document.getElementById('jumbotron_') != null){
                element = document.getElementById("jumbotron_");
                if (element) {
                    element.style.height = 'auto !important';
                  }
            }

    });
    console.log(`Performing search for: ${searchQuery}`);
  }
   
}
