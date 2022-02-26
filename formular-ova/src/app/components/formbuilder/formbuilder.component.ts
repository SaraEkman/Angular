import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent implements OnInit {
  //Dynamiska formulär
  userForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(2)]],
    lastName: [''],
    email: [''],
    age: [0],
    address: this.fb.group({
      street: [''],
      zip: [''],
      city: ['']
    }),
    nickNames: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.userForm.get('age').setValue();
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  get nicknames():FormArray {
    return this.userForm.get('nickNames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(this.fb.control(''));
  }

}
