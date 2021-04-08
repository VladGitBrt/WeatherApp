import { Component } from '@angular/core';
import {GetWeatherService} from './get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewWeather';
  condition = 'SEND';
  weatherArr = [];
  result = {};
  constructor(private svc: GetWeatherService) {
  }
  sendRequest(countryName: string): void{
    this.result = this.svc.sendRequest(countryName).subscribe((result) => {
    console.log(result);
  });
  }
}
