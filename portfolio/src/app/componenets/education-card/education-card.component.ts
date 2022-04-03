import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

  constructor() { }

  @Input() Title: string = "";
  @Input() ImgSrc: string = "";
  @Input() description: string = "";

  ngOnInit(): void {
  }

}
