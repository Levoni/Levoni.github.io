import { Component, OnInit } from '@angular/core';
import { educationCardModel } from 'src/app/models/educationCardModel';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  schoolCardInfo: educationCardModel = {
    Title: 'UW-Platteville',
    description: 'Bachlors for Software Engineering',
    ImgSrc: '../../../assets/UWLogo.png',
    yearSpan: '2015-2019',
    languages: ['C#','C++','JavaScript','Java','SQL'],
    technologies: ['dotnet framework','react native','oracle']
  }

  experityCardInfo: educationCardModel = {
    Title: 'Experity',
    description: 'Software Engineer',
    ImgSrc: '../../../assets/logo.png',
    yearSpan: '2019-Present',
    languages: ['C#','JavaScript/Typescript','SQL'],
    technologies: ['dotnet core','ASP.NET','Angular','sql server']
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
