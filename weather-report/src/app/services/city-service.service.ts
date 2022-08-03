import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  public appId : string = 'd4594364698122bfd1c4b3eb5f2ff19f';

  constructor(private http: HttpClient) { }

  getCity(city: string): any {
  const url: string = 'http://api.openweathermap.org/geo/1.0/direct';
    const params = new HttpParams()
   .set('q', city)
   .set('limit', 1).set('appid',this.appId);
  return this.http.get(url,{params:params});
  }

  getCityWeatherDetails(data: any){
   const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = new HttpParams().set('lat',data.lat).set('lon',data.lon).set('appid',this.appId);
    return this.http.get(url,{params:params});
  }
}
