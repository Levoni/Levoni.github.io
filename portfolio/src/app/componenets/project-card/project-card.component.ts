import { Component, Input, OnInit } from '@angular/core';
import { projectCardModel } from 'src/app/models/projectCardModel';
import { ImgDialogServiceService } from 'src/app/services/img-dialog-service.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectInfo: projectCardModel|any = null;

  isOpen: boolean = false;

  constructor(private imgDialogService: ImgDialogServiceService) { }

  ngOnInit(): void {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  getGroupText() {
    return this.projectInfo.wasGroup ? "Group Development" : "Solo Development"
  }
  openImage(event: any) {
    this.imgDialogService.setImageSrc(event.srcElement.src);
  }
}
