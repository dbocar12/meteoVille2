import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherSumComponent } from './components/weather-sum/weather-sum.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSumComponent,
    WeatherForecastComponent,
  ],
    imports: [
        BrowserModule,
        NgxSkeletonLoaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
