import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  city: string | undefined;
  info: any;
  temp : Int16Array | undefined;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {

  }

  Submit(): void {
    this.service.getWeather({city: this.city, units: this.info}).subscribe(result => {
      this.info = result;
      this.temp = this.info.current.temp;
    });
  }
}