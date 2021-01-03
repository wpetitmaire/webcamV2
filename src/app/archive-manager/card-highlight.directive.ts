import { ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  private originalBorderColor: string = '';
  private hoverBorderColor: string = 'solid 3px #c2185b';

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = this.hoverBorderColor;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = this.originalBorderColor;
  }
}
