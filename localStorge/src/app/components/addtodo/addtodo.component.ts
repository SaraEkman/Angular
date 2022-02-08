import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter<string>();

  newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handelchange(todoText: string) {
    this.newTodo = todoText;
  }
  save() {
    this.saveTodo.emit(this.newTodo);
  }

}
