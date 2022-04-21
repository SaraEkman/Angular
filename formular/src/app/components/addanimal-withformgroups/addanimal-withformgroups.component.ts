import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addanimal-withformgroups',
  templateUrl: './addanimal-withformgroups.component.html',
  styleUrls: ['./addanimal-withformgroups.component.scss']
})
export class AddanimalWithformgroupsComponent implements OnInit {
  userGroup = new FormGroup({
    Name: new FormControl(''),
    Breed: new FormControl(''),
    Description: new FormControl('')
  });

  text: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handle() {
    this.text.push(this.userGroup.value)
    console.log(this.userGroup.value);
    console.log(this.text);
  }

}
