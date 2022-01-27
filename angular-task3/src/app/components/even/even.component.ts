import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  even(num: number) {
    if (num % 2==0) {
      return true
    } else {
      return false
    }
  }
}
