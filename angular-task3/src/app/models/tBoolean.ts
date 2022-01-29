export class bool {
  spel: string
  tyckaOm: boolean

  constructor(spl: string, ty: boolean) {
    this.spel = spl
    if (ty == !true) {
      this.tyckaOm = false
    } else {
      this.tyckaOm = ty
    }
  }
}
