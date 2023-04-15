import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wxConfigs as config} from './config';


@Injectable({
  providedIn: 'root' //adjust scope or visibility
})
export class WeatherService {
    wxURLBase: string = config.wxURLBase;
    //use an observable to fetch data...returning an observable here
    getWeather(wxOptions: { city: any; units: any; }) {
      // return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=41.98&lon=71.32&appid=${config.API_KEY}&units=imperial`);
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${wxOptions.city}&appid=${config.API_KEY}`)
    }
    //Injections are done in constructor
    constructor(private http: HttpClient) { }
}