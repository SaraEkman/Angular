import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss']
})
export class PrintAnimalsComponent implements OnInit {


  animals: Animal[] = [new Animal('Kanin', 'Dvärgvädur', 3, 'gräs'),
    new Animal('Katt', 'BondeKatt', 5, 'fisk')]

  isFed: boolean = false

  printA: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  updateIsFed(event: Animal) {
    console.log(event);
    this.isFed = !this.isFed
    this.printA.push(`${event.namn} är Matad`)
  }

}
