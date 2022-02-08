import { Component, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    let todosString: string = localStorage.getItem('todos') || '[]';
    this.todos = JSON.parse(todosString)
  }

  create(todoText:string) {
    this.todos.push(new Todo(todoText));
    this.SaveLS()
  }
  SaveLS() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeLS(i: number) {
    this.todos.splice(i,1);
    console.log(i);
    this.SaveLS()
  }
}
