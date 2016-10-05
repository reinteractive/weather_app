import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Weather {

  data: any;

  constructor(public http: Http) {
    console.log('Hello Weather Provider');
  }

  weatherForLocation(latitude, longitude){
     return new Promise(resolve => {
       this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=<API KEY>").map(res => res.json())
       .subscribe(data => {
         this.data = data;
         resolve(this.data);
       })
     })
   }
}
