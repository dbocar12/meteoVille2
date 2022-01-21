import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../api/cities";
import { getTime, getWeatherIcon , getDay} from "src/app/libs";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  // @ts-ignore
  weather: Weather ;
  constructor() { }

  ngOnInit(): void {
  }
  @Input() set cityWeather(value: any) {
    this.weather = { ...value };
  }

  getIcon(icon: any): string {
    return getWeatherIcon(icon);
  }

  getTime(index: number, timeZone: string): string {
    const hoursOffset: number = index + 1;
    return getTime(hoursOffset, timeZone);
  }

  getDay(index: number, timeZone: any): string {
    const hoursOffset: number = index + 1;
    return getDay(hoursOffset, timeZone);
  }
}
