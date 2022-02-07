import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') speed: number = 0;
  @Input() color:string = 'green'

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = this.color;
    (this.el.nativeElement as HTMLElement).style.transition =
      'all ' + this.speed + 's';
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'transparent'
  }

}
