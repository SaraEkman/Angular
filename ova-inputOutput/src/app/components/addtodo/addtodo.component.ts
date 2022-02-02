import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss'],
})
export class AddtodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter<string>()
  newTodo: string = ''

  constructor() {}

  ngOnInit(): void {}

  handlechange(todotext: string) {
    this.newTodo = todotext
  }
  save() {
    this.saveTodo.emit(this.newTodo)
  }
}
