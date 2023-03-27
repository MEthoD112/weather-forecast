import {Injectable} from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {forecastUrl, openWeatherApiKey, weatherUrl} from "../constants/constants";
import {Forecasts} from "../interfaces/forecast.interface";
import {Weather} from "../interfaces/weather.interface";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getCityWeather(cityName: string): Observable<Weather> {
    const params = new HttpParams({
      fromObject: {
        q: cityName,
        appid: openWeatherApiKey,
        units: 'metric'
      }
    });
    return this.http.get<Weather>(weatherUrl, {params}).pipe(
      catchError(err => {
        throwError(err);
        return of(err);
      })
    );
  }

  public getCityForecast(cityName: string): Observable<Forecasts> {
    const params = new HttpParams({
      fromObject: {
        q: cityName,
        appid: openWeatherApiKey,
        units: 'metric'
      }
    });
    return this.http.get<Forecasts>(forecastUrl, {params}).pipe(
      catchError(err => {
        throwError(err);
        return of(err);
      })
    );
  }
}
