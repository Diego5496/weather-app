import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = '6d79b73c4fa8d7344f6fca94d2fa2dc8';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName : string): Observable<any>{
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}',
      {})
  }
}
