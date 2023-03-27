import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWrapperComponent } from './forecast-wrapper.component';

describe('ForecastWrapperComponent', () => {
  let component: ForecastWrapperComponent;
  let fixture: ComponentFixture<ForecastWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
