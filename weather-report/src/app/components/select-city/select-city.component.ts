import { Component, OnInit } from '@angular/core';
import { CityServiceService } from 'src/app/services/city-service.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit {

  public inputValue: string = '';

  constructor(private cityService: CityServiceService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
  }

  getCityDetails() {
    this.cityService.getCity(this.inputValue).subscribe((response: any) => {
      const data = response;
      console.log(response);
      if (data.length > 0) {
        const object = {
          lat: data[0].lat,
          lon: data[0].lon
        };
        this.cityService.getCityWeatherDetails(object).subscribe(response => {
          console.log(response);
        });
      }
    });
  }


}
