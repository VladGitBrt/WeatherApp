import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface WeatherData{
  cityName: string;
  temperature: string;
  pressure: string;
  weatherDescription: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  key = 'c187a1ff8b9459f9829676efc9261ab1';
  constructor(private http: HttpClient) { }
  sendRequest(name: string): Observable<object>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=' + this.key);
  }
}
