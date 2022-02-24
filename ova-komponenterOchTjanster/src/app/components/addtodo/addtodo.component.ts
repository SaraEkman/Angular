import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  todoText: string = '';

  constructor(private service:TodosService) { }

  ngOnInit(): void {
  }
  handleChange(newText: string) {
    this.todoText = newText;
  }
  save() {
    let newTodo = new Todo(this.todoText)
    this.service.addTodo(newTodo)
  }

}
