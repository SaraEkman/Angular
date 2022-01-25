import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/Family';

@Component({
  selector: 'app-extrainfo',
  templateUrl: './extrainfo.component.html',
  styleUrls: ['./extrainfo.component.scss']
})
export class ExtrainfoComponent implements OnInit {
  myFamily: Family = new Family("Anili",62,"kalle",65);


  constructor() {}

  ngOnInit(): void {
  }

}
