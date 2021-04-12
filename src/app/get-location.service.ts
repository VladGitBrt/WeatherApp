import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoInfo } from './show-weather/show-weather.component';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  key = 'df1a0de255f943c0a2dfe3e3b72b54a4';
  constructor(private getLocation: HttpClient) { }
  public getCity(lat: number, lon: number): Observable<any>{
   return this.getLocation.get(`https://api.opencagedata.com/geocode/v1/json?q=${lon}+${lat}&key=${this.key}&language=ru&pretty=1`);
  }
}
