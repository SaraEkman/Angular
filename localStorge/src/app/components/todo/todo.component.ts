import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo:Todo = new Todo('')
  constructor() { }

  ngOnInit(): void {
  }

  @Output() theTodo = new EventEmitter<Todo>()
  toggle() {
    this.theTodo.emit(this.todo)
  }

}
