import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgDialogServiceService {

  constructor() { }
  isVisible: boolean = false;

  public imgSrc: Subject<string> = new Subject<string>();


  setImageSrc(src: string) {
    this.imgSrc.next(src);
  }
}
