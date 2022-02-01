import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter<string>()

  newtodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  handelChange(todoText: string) {
    this.newtodo = todoText;
  }

  save() {
    this.saveTodo.emit(this.newtodo)
  }

}
