import { Component } from '@angular/core';
import {GetWeatherService} from './get-weather.service';
export interface WeatherData{
  cityName: string;
  temperature: string;
  pressure: string;
  weatherDescription: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewWeather';
  condition = 'SEND';
  weatherArr: WeatherData [] = [];
  result: any;
  value: WeatherData | undefined;
  constructor(public svc: GetWeatherService) {
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
}
