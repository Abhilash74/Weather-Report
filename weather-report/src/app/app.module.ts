import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    CityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
