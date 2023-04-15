import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  weatherForm = this.formBuilder.group({
    city: ''
  });
  city: string | undefined;
  info: any;
  temp : Int16Array | undefined;
  weather: any;

  constructor(
    private service: WeatherService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit(result: { city: String; }) {
    console.log(result.city);
    this.service.getWeather({city: result.city, units: "imperial"}).subscribe(result => {
      this.info = result;
      this.weather = this.info.weather;
    });
    this.weatherForm.reset();
  }

}