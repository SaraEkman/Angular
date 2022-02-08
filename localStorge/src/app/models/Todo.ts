export class Todo {
  text: string;
  created: Date;


  constructor(newtodo:string) {
    this.text = newtodo;
    this.created = new Date();
  }
}
