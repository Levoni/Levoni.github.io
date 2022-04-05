import { Component, Input, OnInit } from '@angular/core';
import { skillCardModel } from 'src/app/models/skillCardModel';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillInfo: skillCardModel|any = null;
  formatedWidth: string = '0%'

  constructor() { }

  ngOnInit(): void {
    this.formatedWidth = this.skillInfo.percentage + '%';
    console.log(this.skillInfo)
    console.log(this.formatedWidth)
  }

}
