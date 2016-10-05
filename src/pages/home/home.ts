import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Weather } from '../../providers/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherData: any={};

  constructor(public navCtrl: NavController, public weather: Weather) {
    Geolocation.getCurrentPosition().then((resp) => {
      this.getWeather(resp.coords.latitude, resp.coords.longitude)
    })
  }

  getWeather(latitude, longitude){
    this.weather.weatherForLocation(latitude, longitude)
      .then(data => {
        this.weatherData = data;
      })
  }

}
