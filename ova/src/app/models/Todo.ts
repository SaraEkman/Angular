import { StringMap } from '@angular/compiler/src/compiler_facade_interface'

export class Todo {
  text: string
  done: boolean

  constructor(newTodo: string) {
    this.text = newTodo
    this.done = false
  }
}
