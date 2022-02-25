import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(0),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl('')
    })

   })

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit() {
    console.log(this.userForm.value);
  }

}
