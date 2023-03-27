import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Forecast} from "../../interfaces/forecast.interface";
import {forecastColumns} from "../../constants/constants";

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityForecastComponent {
  @Input('forecastList') public forecastList!: Forecast[];
  public displayedColumns = forecastColumns;
}
