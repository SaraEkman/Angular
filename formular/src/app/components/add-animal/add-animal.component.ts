import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss'],
})
export class AddAnimalComponent implements OnInit {
  animalName = new FormControl('');
  Type = new FormControl('');
  description = new FormControl('');

  constructor() {}

  ngOnInit(): void {
  }
  changeName(){
    this.animalName.setValue('Skojar');
  }
}
