import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Weather} from "../../interfaces/weather.interface";

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherComponent {
  @Input('weather') public weather!: Weather;
}
