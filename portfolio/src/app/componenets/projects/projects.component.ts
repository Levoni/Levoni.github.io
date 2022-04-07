import { Component, Input, OnInit } from '@angular/core';
import { projectCardModel } from 'src/app/models/projectCardModel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectCardInfos: projectCardModel[] = [
    {
      title: 'Batty',
      description: 'A brick breaking game styled after the clasic game breakout. ',
      reason: 'Class project created during my sophmore year of college.',
      languages: ['C#', 'DotNet Framework'],
      imgSrc: '../../../assets/Batty_Custom_level.PNG',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/Batty',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/batty',
        }
      ],
      year:'2017',
      interestNumber: 5
    },
    {
      title: 'Vast Adventure',
      description: 'A text based adventure about excaping a dungeon. Made with my own game engine which utilizes the Monogame Framework.',
      reason: 'Personal project made for fun and to test out my game engine.',
      languages: ['C#', 'Monogame'],
      imgSrc: '../../../assets/dungeaon.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/VastAdventure',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/vast-adventure',
        }
      ],
      year:'2022',
      interestNumber: 7
    },
    {
      title: 'Requiem: The Lost Voices',
      description: 'A survival horror game where you overcome challanges and discover about the lost voices.',
      reason: 'Made for a game jam along with several other developers.',
      languages: ['C#', 'Unity'],
      imgSrc: '../../../assets/requiem.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Zaidis/Project-Starburst',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://zaidisx.itch.io/requiem',
        }
      ],
      year:'2022',
      interestNumber: 7
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
