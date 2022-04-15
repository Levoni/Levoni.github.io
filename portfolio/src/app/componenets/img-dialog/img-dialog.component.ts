import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImgDialogServiceService } from 'src/app/services/img-dialog-service.service';

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.scss']
})
export class ImgDialogComponent implements OnInit {

  constructor(private imgDialogService: ImgDialogServiceService) { }

  isVisible: boolean = false;
  @ViewChild('imgDialog', {read: ElementRef, static: true}) img!: ElementRef<HTMLImageElement>;
  @ViewChild('imgDialogContainer', {read: ElementRef, static: true}) imgContainer!: ElementRef<HTMLImageElement>;
  ngOnInit(): void {
    document.getElementById("imgDialog")?.setAttribute("style","display:none")

    document.onclick = (args: any) : void => {
      if(this.isVisible && args.target.id !== 'imgDialog') {
        this.isVisible = false;
        document.getElementById("imgDialog")?.setAttribute("style","display:none")
      }
    }

    this.imgDialogService.imgSrc.subscribe((value) => {
      // this.imgContainer.nativeElement.width = 100%;
      // this.imgContainer.nativeElement.height = 100%;
      document.getElementById("imgDialog")?.setAttribute("style","display:initial")
      this.img.nativeElement.src = value;
      this.img.nativeElement.onload = () => {
        this.isVisible = true;
      }
    })

    // var img = new Image();
    // img.onload()
    // img.src= src;
  }
}