import { Component, OnInit } from '@angular/core';
import { skillCardModel } from 'src/app/models/skillCardModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  cSharpInfo: skillCardModel = {
    language:'C#',
    percentage: 90,
    ImgSrc: ''
  }
  javaScriptInfo: skillCardModel = {
    language:'JavaScript',
    percentage: 90,
    ImgSrc: ''
  }
  sqlInfo: skillCardModel = {
    language:'SQL',
    percentage: 80,
    ImgSrc: ''
  }
  angularInfo: skillCardModel = {
    language:'Angular2',
    percentage: 70,
    ImgSrc: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
