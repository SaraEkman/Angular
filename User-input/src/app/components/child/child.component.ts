import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    done: boolean = false;
  inpVa:string = ''
  constructor() { }

  ngOnInit(): void {
  }

   // getData(event: any) {
  //   this.inpVa = event.target.value
  // }

  // getDat(event:KeyboardEvent) {
  //   this.inpVa = (event.target as HTMLInputElement).value
  //   console.log(typeof event);
  //   // this.done = !this.done
  // }
  getDa(theVal:string) {
    this.inpVa = theVal
  }

}
