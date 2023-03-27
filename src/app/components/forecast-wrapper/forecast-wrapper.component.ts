import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, forkJoin, map, Subject, switchMap} from "rxjs";
import {CitiesService} from "../../api/cities.service";
import {ForecastService} from "../../api/forecast.service";

@Component({
  selector: 'app-forecast-wrapper',
  templateUrl: './forecast-wrapper.component.html',
  styleUrls: ['./forecast-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastWrapperComponent {
  private cityInfoSubject = new Subject<string>();
  public searchControl = new FormControl('');
  public $cities = this.searchControl.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(300),
    filter(() => !!this.searchControl?.value),
    switchMap(() => this.citiesService.getCities(this.searchControl.value as string))
  );
  public $cityInfo = this.cityInfoSubject.pipe(
    switchMap((cityName: string) =>
      forkJoin([
        this.forecastService.getCityForecast(cityName),
        this.forecastService.getCityWeather(cityName)
      ])
    ),
    map(([forecast, weather]) => ({
      forecasts: forecast.list,
      weather
    }))
  );

  constructor(
    private citiesService: CitiesService,
    private forecastService: ForecastService,
  ) {
  }

  public onCitySelect(cityName: string): void {
    this.cityInfoSubject.next(cityName);
  }
}
