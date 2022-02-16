import { Component, OnInit } from '@angular/core'
import { Animal } from 'src/app/models/Animal'
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss'],
})
export class PrintAnimalsComponent implements OnInit {
  animals: Animal[] = [];

  isFed: number[] = [0]

  sumF:number= 0

  printA: string[] = []

  constructor(private service: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.service.getAnimals()
    let res:string = localStorage.getItem('num') || '[]';
    this.sumF = JSON.parse(res);
  }

  updateIsFed(event: Animal) {
    console.log(event)
    this.isFed.push(1);
    this.sumF = this.isFed.reduce((a, b) => a + b);
    // this.printA.push(`${event.namn} är Matad`)
    localStorage.setItem('num', JSON.stringify(this.sumF));
  }

  remo(ev: Animal) {
    console.log(ev);
    this.isFed.push(-1);
    this.sumF = this.isFed.reduce((a, b) => a + b);
    // this.printA.push(`${ev.namn} är inte Matad`);
     localStorage.setItem('num', JSON.stringify(this.sumF));
  }

}
