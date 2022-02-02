import { Component, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss']
})
export class PrintAnimalsComponent implements OnInit {

  animals: Animal[] = [new Animal('Kanin', 'Dvärgvädur', 3, false, 'gräs'),
  new Animal('Katt', 'BondeKatt', 5, true, 'fisk')]

  constructor() { }

  ngOnInit(): void {
  }

}
