import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service';
import { GetLocationService } from '../get-location.service';
import { ResultFunc } from 'rxjs/internal/observable/generate';

export interface WeatherData{
  cityName: string;
  temperature: string;
  pressure: string;
  weatherDescription: string;
}
export interface GeoInfo{
  documentation: string;
}
@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {
  title = 'NewWeather';
  condition = 'SEND';
  weatherArr: WeatherData [] = [];
  result: any;
  geoResults = "";
  key = 'df1a0de255f943c0a2dfe3e3b72b54a4';
  value: WeatherData | undefined;
  constructor(public svc: GetWeatherService, public location: GetLocationService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((result)=>{
      console.log(result);
      let lat = result.coords.latitude;
      let lon = result.coords.longitude;
      this.getGeo(lat,lon);
    }
      , this.failCallback);
  }
  sendRequest(countryName: string): void{
    this.svc.sendRequest(countryName).subscribe(result => {
      this.result = result,
        this.value = {
          cityName: this.result.name,
          temperature: this.result.main.temp,
          pressure: this.result.main.pressure,
          weatherDescription: this.result.weather[0].description
        },
        this.weatherArr.push(this.value);
    });
  }
  failCallback(error: any){
    console.error(error);
  }
  getGeo(lon: number,lat: number){
    this.location.getCity(lat,lon).subscribe(geo => {
     console.log(geo);
     this.geoResults = geo.results[0].components.city;
     console.log(this.geoResults);
    });
  }
}
