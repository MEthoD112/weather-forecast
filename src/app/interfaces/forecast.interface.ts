import {WeatherDescription} from "./weather.interface";

export interface Forecasts {
  list: Forecast[]
}

export interface Forecast {
  dt_txt: string;
  main: {
    temp: number;
  },
  weather: WeatherDescription[]
}
