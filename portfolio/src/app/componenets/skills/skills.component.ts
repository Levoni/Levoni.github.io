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
    language:'Angular',
    percentage: 70,
    ImgSrc: ''
  }
  reactInfo: skillCardModel = {
    language:'React/NextJS',
    percentage: 70,
    ImgSrc:''
  }
  awsInfo: skillCardModel = {
    language:'AWS',
    percentage: 40,
    ImgSrc:''
  }
  CPlusPlusinfo: skillCardModel = {
    language:'C++',
    percentage: 30,
    ImgSrc: ''
  }
  kotlinInfo: skillCardModel = {
    language:'Kotlin',
    percentage: 30,
    ImgSrc: ''
  }
  JavaInfo: skillCardModel = {
    language:'Java',
    percentage: 20,
    ImgSrc: ''
  }
  androidInfo: skillCardModel = {
    language:'Android',
    percentage: 20,
    ImgSrc: ''
  }


  divAppear: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  appear(event: any) {
    this.divAppear = event;
  }
}
