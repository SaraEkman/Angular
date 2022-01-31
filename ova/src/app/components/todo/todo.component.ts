import { Component, OnInit } from '@angular/core'
import { Todo } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  shop: Todo = new Todo('Städa och baka')

  todos: Todo[] = [new Todo('Handla'), new Todo('Diska'), new Todo('sova')]
  // todoClass: string = "todo";

  image: string = 'someRandomURL';

  isDisabled: boolean = false;

  firstName: string = "";

  constructor() {}

  ngOnInit(): void { }

  toggle():void {
    // this.shop.done = !this.shop.done;
    this.isDisabled = !this.isDisabled
  }

  toggleTodo(i:number) {
    console.log(i);
    this.todos[i].done = !this.todos[i].done
  }
  toggleTodoOb(toggleTodo: Todo) {
    toggleTodo.done = !toggleTodo.done
  }

  handleChange(someVal:string) {
    this.firstName = someVal
  }

  search() {
    console.log(this.firstName);

    this.todos.push(new Todo(this.firstName))

    // this.firstName = "" INTE FUNKAR NU
  }
}
