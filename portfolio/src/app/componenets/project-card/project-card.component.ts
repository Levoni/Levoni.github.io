import { Component, Input, OnInit } from '@angular/core';
import { projectCardModel } from 'src/app/models/projectCardModel';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectInfo: projectCardModel|any = null;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
