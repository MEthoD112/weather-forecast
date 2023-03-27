import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastWrapperComponent } from './components/forecast-wrapper/forecast-wrapper.component';
import { CitiesAutocompleteComponent } from './components/cities-autocomplete/cities-autocomplete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ForecastWrapperComponent,
    CitiesAutocompleteComponent,
    CityWeatherComponent,
    CityForecastComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatInputModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
