import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  constructor(public getLocation: HttpClient) { }
  getCity(): void{
    this.getLocation.get('https://api.opencagedata.com/geocode/v1/json?q=49.2371968+28.5048832&key=df1a0de255f943c0a2dfe3e3b72b54a4')
      .subscribe(result => {
        console.log(result);
      });
  }
}
