import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal = new Animal('', '', 0, '')


  @Output() fed = new EventEmitter<Animal>()


  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.fed.emit(this.animal)
  }

}
