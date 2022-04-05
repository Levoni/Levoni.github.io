import { Component, Input, OnInit } from '@angular/core';
import { educationCardModel } from 'src/app/models/educationCardModel';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

  constructor() { }

  @Input() cardInfo: educationCardModel|any= null
  isOpen: boolean = false;
  
  ngOnInit(): void {
  }

  toggleExpand() {
    this.isOpen = !this.isOpen;
  }
}
