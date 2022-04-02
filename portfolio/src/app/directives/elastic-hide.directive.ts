import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appElasticHide]'
})
export class ElasticHideDirective {

  MaxHeight:number = 0;
  currentHeight:number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.MaxHeight = el.nativeElement.style.height;
   }
   @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    if(this.currentHeight < window.scrollY) {
      this.renderer.addClass(this.el.nativeElement, "cover");
      this.renderer.removeClass(this.el.nativeElement, "uncover");
    } else {
      this.renderer.removeClass(this.el.nativeElement, "cover");
      this.renderer.addClass(this.el.nativeElement, "uncover");
    }
    this.currentHeight = window.scrollY;
}

}