import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let geoObservable = new Observable<GeolocationPosition>((o) => {
    let watchId: number;

    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          o.next(position);
        },
        (error: GeolocationPositionError) => {
          o.error(error);
        }
      );
    } else {
      o.error('Your browser does not support geolocation...');
    }

    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      },
    };
  });

    let observer = {
    next: (pos: GeolocationPosition) => {
      console.log(pos);
    },
    error: (e: any) => {
      console.log('Error: ', e);
    },
    complete: () => {},
  };

    geoObservable.subscribe(observer);

  }
}
