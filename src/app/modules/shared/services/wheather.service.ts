import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(location: string): Observable<any> {
    return this.http.get(`${environment.weather_url}${location}/31,80/forecast`);
  }
}
