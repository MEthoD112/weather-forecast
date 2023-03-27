export interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  },
  weather: WeatherDescription[]
}

export interface WeatherDescription {
  description: string
}
