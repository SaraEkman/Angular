import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input('appBackground') num: number = 0;

  constructor(private el: ElementRef) { }

  theVa = (this.el.nativeElement as HTMLDivElement);

  @HostListener('mouseenter') onMouseEnter() {
    this.theVa.style.background = "linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";
    this.theVa.style.webkitBackgroundClip = 'text'
    this.theVa.style.webkitTextFillColor = 'transparent'
    this.theVa.style.fontFamily = '"Courier New", Courier, monospace'
    this.theVa.style.transition = 'all '+ this.num+ 's';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.theVa.style.background = "black";
    this.theVa.style.webkitBackgroundClip = 'text'
    this.theVa.style.webkitTextFillColor = 'transparent'
    this.theVa.style.fontFamily = ' "Arial Narrow", Arial, sans-serif'
    this.theVa.style.fontSize = 'larger'
  }

}
