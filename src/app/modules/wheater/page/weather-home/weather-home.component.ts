import { WeatherService } from './../../services/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent {
  constructor(private weatherService: WeatherService){

  }
  getWheatherDatas(cityName : string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next:(response) =>{
        console.log(response)
      },
      error:(error) => console.log(error),
    });
  }
}
