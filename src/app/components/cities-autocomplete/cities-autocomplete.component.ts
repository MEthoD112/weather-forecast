import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {City} from "../../interfaces/city.interface";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-cities-autocomplete',
  templateUrl: './cities-autocomplete.component.html',
  styleUrls: ['./cities-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesAutocompleteComponent {
  @Input('searchControl') public searchControl!: FormControl;
  @Input('cities') public cities!: City[] | null;
  @Output('selectCity') public selectCity = new EventEmitter<string>();

  public onCitySelect(event: MatAutocompleteSelectedEvent) {
    this.selectCity.emit(event?.option?.value);
  }
}
