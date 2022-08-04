import { Component, OnInit } from '@angular/core';
import { CityServiceService } from 'src/app/services/city-service.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit {

  public inputValue: string = '';
  public cityList: any[] = [];
  public isValidCity: boolean = false;

  constructor(private cityService: CityServiceService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
  }


  getCityDetails() {
    this.cityService.getCity(this.inputValue).subscribe((response: any) => {
      const data = response;
      this.inputValue = '';
      console.log(response);
      if (data.length > 0) {
        this.isValidCity = true
        const object = {
          lat: data[0].lat,
          lon: data[0].lon
        };
        this.cityService.getCityWeatherDetails(object).subscribe((response: any) => {
          const cityObject = {
            name: data[0].name,
            temp: Math.round(response.main['temp']/10),
            weather: response.weather[0].description,
            lat: response.coord.lat,
            lon: response.coord.lon
          };
          console.log(response, cityObject);
          this.cityList.unshift(cityObject);
        });
      }
    });
  }

  deleteCity(index) {
    this.cityList.splice(index, 1);
  }

  clearList() {
    this.cityList = [];
    this.inputValue = '';
  }

  getHourlyWeather(index) {
    const data = {
      lat: this.cityList[index].lat,
      lon: this.cityList[index].lon
    }
    this.cityService.getCityWeatherDetails(data).subscribe((response: any) => {
      console.log(response, 'hourly');
    });
  }


}
