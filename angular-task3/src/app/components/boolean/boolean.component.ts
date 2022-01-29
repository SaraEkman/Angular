import { Component, OnInit } from '@angular/core';
import { bool } from 'src/app/models/tBoolean';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent implements OnInit {
  ettSpel: bool = new bool("Hunt Showdown", true)
  entillSp: bool = new bool("Apex legends",!true)

  constructor() { }

  ngOnInit(): void {
  }

  beFalse(): void {
    this.ettSpel.tyckaOm =!this.ettSpel.tyckaOm
  }

}
