import { Component, Input, OnInit } from '@angular/core';
import { skillCardModel } from 'src/app/models/skillCardModel';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillInfo: skillCardModel|any = null;
  divAppear: boolean = false
  formatedWidth: string = '0%'

  constructor() { }

  ngOnInit(): void {
    this.formatedWidth = this.skillInfo.percentage + '%';
  }

  appear(event: any) {
    this.divAppear = event;
  }

}
