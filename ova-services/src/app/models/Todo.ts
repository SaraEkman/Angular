export class Todo {
  todo: string;
  done: boolean;
  created: Date;

  constructor(newTodo:string) {
    this.todo = newTodo;
    this.done = false;
    this.created = new Date();
  }
}
