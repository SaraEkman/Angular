import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[] =[new Todo('Städa'), new Todo('handla')]

  constructor() { }

  ngOnInit(): void {
  }

  create(newtodo: string) {
    console.log(newtodo);
    this.todos.push(new Todo(newtodo))
  }

}
