import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  // @HostBinding('style.background-color')
  // backgroundColor = 'yellow';

  @HostListener('click')
  clicked() {
    console.log('click event on host element');
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    console.log('mouseenter event on host element');
    this.setFontWeight('yellow');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    console.log('mouseleave event on host element');
    this.setFontWeight('white');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', val);
  }

}
