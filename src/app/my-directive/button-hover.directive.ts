import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
