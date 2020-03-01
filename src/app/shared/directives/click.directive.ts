import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Input('appClick') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') clicked() {
    this.setBorderColor(this.color);
  }

  private setBorderColor(val: string) {
    console.log('Selected: ', val);
    this.renderer.setStyle(this.element.nativeElement, 'border-color', val);
  }

}
