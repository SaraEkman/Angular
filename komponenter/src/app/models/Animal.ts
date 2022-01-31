export class Animal {
  name: string;
  age: number;
  color: string;
  isFed: boolean;

  constructor(n:string, a:number, c:string, i:boolean) {
    this.name = n;
    this.age = a;
    this.color = c;
    this.isFed = i;
  }
}
