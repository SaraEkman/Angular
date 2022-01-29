import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  djur: Animal[] = [new Animal('kanin', 2, 'grå', true),
    new Animal('hund', 5, 'vit',false),
    new Animal('katt', 10, 'svart',true)]



  constructor() { }

  ngOnInit(): void {
  }

}
