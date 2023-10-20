import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {WeatherService} from './weather.service'
import { WeatherResponse } from '../models/weather.model';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { CitySimplier } from '../models/city.simpler.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weatherFromApi?: WeatherResponse;
  searchForm: FormGroup;
  cityName?: string;
  searchControl = new FormControl();
  filteredOptions?: Observable<any[]>;
  cities?: Observable<CitySimplier[]>;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService,
    private renderer: Renderer2, private elementRef: ElementRef) {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''] // Initialize with an empty string
    });
    
   }

  ngOnInit(){
    this.getAllCities();
    this.filteredOptions = this.searchControl.valueChanges.pipe(
        startWith(''),
        switchMap(value => this.weatherService.getAllCities(value == "" ? 'all' : value)),
        map(value => this._filter(value))
      );
  }

  getAllCities(){
  }

  private _filter(options: CitySimplier[]): any {
        let filterValue = ''
        if(this.searchControl.value !== null)
            filterValue = this.searchControl.value.toLowerCase();
        var s =  options.filter(option => {
            if(option.cityName){
            return option.cityName.toLowerCase().includes(filterValue);
            }
            return option.cityName;
        });
        return s;
    }

    convertDate(date: any){
        return new Date(date* 1000).toDateString();
    }

  performSearch() {
    const search = this.searchControl.value.split(",")[0];
    
    // You can implement your search logic here, e.g., call a search service or display the search results.
    this.weatherService.getWeatherPrediction(search).subscribe((data: any) => {
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
    console.log(`Performing search for: ${search}`);
  }

}
