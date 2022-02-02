export class Animal {
  namn: string;
  sort: string;
  vikt: number;
  SMatVanor: boolean;
  VMatVanor: string;

  constructor(n: string, s: string, v: number, m: boolean,a:string) {
    this.namn = n;
    this.sort = s;
    this.vikt = v;
    this.SMatVanor = m;
    this.VMatVanor = a;

  }

}
