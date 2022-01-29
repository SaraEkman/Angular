import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iseven',
  templateUrl: './iseven.component.html',
  styleUrls: ['./iseven.component.scss']
})
export class IsevenComponent implements OnInit {
testName:String = "Sara"

  constructor() { }

  ngOnInit(): void {
  }

    iseven(num: number) {
    if (num % 2==0) {
      return true
    } else {
      return false
    }
  }

}
