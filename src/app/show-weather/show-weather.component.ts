import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service';
import {HttpClient} from '@angular/common/http';
import { GetLocationService } from '../get-location.service';

export interface WeatherData{
  cityName: string;
  temperature: string;
  pressure: string;
  weatherDescription: string;
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
  lat = 0;
  lon = 0;
  key = 'df1a0de255f943c0a2dfe3e3b72b54a4';
  value: WeatherData | undefined;
  constructor(public svc: GetWeatherService, public location: GetLocationService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.successCallback, this.failCallback);
  }
  sendRequest(countryName: string): void{
    this.svc.sendRequest(countryName).subscribe((result) => {
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
  successCallback(position: any): void{
    console.log(position);
    this.location.getCity();
}
  failCallback(error: any): void{
    console.error(error);
  }
  
}
