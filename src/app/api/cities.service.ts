import {Injectable} from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {citiesApiKey, citiesLimit, citiesUrl} from "../constants/constants";
import {City} from "../interfaces/city.interface";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getCities(searchString: string): Observable<City[]> {
    const params = new HttpParams({
      fromObject: {
        name: searchString,
        limit: citiesLimit
      }
    });
    const headers = new HttpHeaders({
      'X-Api-Key': citiesApiKey
    })
    return this.http.get<City[]>(citiesUrl, {params, headers}).pipe(
      catchError(err => {
        throwError(err);
        return of([]);
      })
    );
  }
}
