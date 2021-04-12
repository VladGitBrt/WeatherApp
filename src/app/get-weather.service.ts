import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { WeatherData } from './show-weather/show-weather.component';



@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  key = 'c187a1ff8b9459f9829676efc9261ab1';
  constructor(private http: HttpClient) { }
  public sendRequest(name: string): Observable<object>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=' + this.key);
  }
}
