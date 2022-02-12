import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-geolocation-two',
  templateUrl: './geolocation-two.component.html',
  styleUrls: ['./geolocation-two.component.scss']
})
export class GeolocationTwoComponent implements OnInit {
   positions: GeolocationPosition[] = [];
  subscription: Subscription = new Subscription();

  constructor() { }

  geoObservable = new Observable<GeolocationPosition>((o) => {
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

 observer = {
    next: (pos: GeolocationPosition) => {
      console.log(pos);
      this.positions.push(pos);
    },
    error: (e: any) => {
      console.log('Error: ', e);
    },
    complete: () => {},
  };

  ngOnInit(): void {


  }
  startGettingPos(){
   this.subscription = this.geoObservable.subscribe(this.observer);
  }
  stoppgettingPos() {
    this.subscription.unsubscribe();
  }

  // initMap() {
   // AIzaSyAb_zL-Ou3WmlfwGbYUmwJ_82zBykdYQbA
  // }

}
