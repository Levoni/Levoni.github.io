import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter, Input
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appAppear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<boolean>;
  @Input() singleAppear: boolean = true;

  elementPos: number = 0;
  elementHeight: number = 0;

  scrollPos: number = 0;
  windowHeight: number = 0;

  subscriptionScroll: Subscription | undefined;
  subscriptionResize: Subscription | undefined;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<boolean>();
   }

   saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
}
getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
        offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
}
checkVisibility() {
    if (this.isVisible()) {
        // double check dimensions (due to async loaded contents, e.g. images)
        this.saveDimensions();
        if (this.isVisible()) {
          if(this.singleAppear) {
            this.unsubscribe();
          }
            this.appear.emit(true);
        } else {
          this.appear.emit(false);
        }
    } else {
      this.appear.emit(false);
    }
}
isVisible() {
    return this.scrollPos + this.windowHeight >= this.elementPos;
}

subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
        .subscribe(() => {
            this.saveScrollPos();
            this.checkVisibility();
        });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
        .subscribe(() => {
            this.saveDimensions();
            this.checkVisibility();
        });
}
unsubscribe() {
    if (this.subscriptionScroll) {
        this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
        this.subscriptionResize.unsubscribe();
    }
}

ngAfterViewInit() {
    this.subscribe();
}
ngOnDestroy() {
    this.unsubscribe();
}
}
