import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.scss']
})
export class ShowinfoComponent implements OnInit {

  name: String = "Sara";
  age: number = 22;
  children: String[] = ["Sarita"];
  maried: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
