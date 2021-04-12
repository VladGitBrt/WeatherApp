import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { GetWeatherService } from './get-weather.service';
import { GetLocationService } from './get-location.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GetWeatherService,
    GetLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
