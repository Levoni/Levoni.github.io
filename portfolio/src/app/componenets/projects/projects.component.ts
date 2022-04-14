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
      languages: ['C#', 'Win Forms'],
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
      year:'2018',
      interestNumber: 5,
      wasGroup: true
    },
    {
      title: 'Vast Adventure',
      description: 'A text based adventure about excaping a dungeon. Made with my own game engine which utilizes the Monogame Framework.',
      reason: 'Personal project made for fun and to test out my game engine.',
      languages: ['C#', 'Monogame', 'Personal Game Engine'],
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
      year:'2021',
      interestNumber: 7,
      wasGroup: false
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
      interestNumber: 7,
      wasGroup: true
    },
    {
      title: 'Game Engine',
      description: 'A c# based game engine which utilizes the MonoGame framework. It is architected with ECS architecture. It also has systems already built for file IO, input management, basic collisoin detection/physics',
      reason: 'A project I made because I wanted to try a different architecture pattern and made some games with it.',
      languages: ['C#', 'MonoGame'],
      imgSrc: '../../../assets/c_sharp_logo.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/GameEngine',
        }
      ],
      year:'2020',
      interestNumber: 8,
      wasGroup: false
    },
    {
      title: 'AI Maze Solver',
      description: 'A visual representation of different search algorithems. Complete with a maze generator/editor, realtime visualization, and search metrics',
      reason: 'Project done for my AI class senior year of college.',
      languages: ['C#', 'WinForms'],
      imgSrc: '../../../assets/Maze_Solver.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/Search-algorithm-Maze-solver',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/search-algorithm-visualizer',
        }
      ],
      year:'2019',
      interestNumber: 8,
      wasGroup: true
    },
    {
      title: 'Dungeon Maze',
      description: 'A game where you fight through a maze to get the highest score.',
      reason: 'Project done for my Intermediate software development class softmore year.',
      languages: ['C++', 'WinForms'],
      imgSrc: '../../../assets/Maze_hard.PNG',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/DungeonMaze',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/dungeon-maze',
        }
      ],
      year:'2017',
      interestNumber: 8,
      wasGroup: true
    },
    {
      title: 'Portfolio Webpage',
      description: 'A webpage to display some info about me and things I have done.',
      reason: 'A project I made to work on web development and be able to show people what I have done.',
      languages: ['Typescript', 'HTML', 'CSS', 'Angular'],
      imgSrc: '../../../assets/webPage.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/levoni.github.io',
        },
        {
          linkImgSrc: '../../../assets/webpage_logo.png',
          linkUrl: 'https://levoni.github.io/',
        }
      ],
      year:'2022',
      interestNumber: 9,
      wasGroup:false
    },
    {
      title: 'Kingdom Conquest',
      description: 'A turn based strategy game made using the Monogame framework. Contains single player or Multiplayer of LAN gameplay options.',
      reason: 'A project I did during my Software Quality class Junior year.',
      languages: ['C#', 'Monogame'],
      imgSrc: '../../../assets/KingdomConquest_preview.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/KingdomConquest',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/kingdom-conquest',
        }
      ],
      year:'2017',
      interestNumber: 5,
      wasGroup: true
    },
    {
      title: 'nataC fo sreltteS',
      description: 'A multiplayer board game that involves resource management and city expansion.  Based on the game Settlers of Catan.',
      reason: 'A project I did during my Software maintenance class Sophmore year.',
      languages: ['C#', 'WinForms'],
      imgSrc: '../../../assets/natac_splash.PNG',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/nataCfosreltteS',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/natac-fo-srelttes',
        }
      ],
      year:'2016',
      interestNumber: 5,
      wasGroup: true
    },
    {
      title: 'Garage Sale POS',
      description: 'imple tool to track sales and calculate totals.',
      reason: 'A project made so my family could track sales at their garage sales with ease.',
      languages: ['C#', 'WinForms'],
      imgSrc: '../../../assets/POS_Register.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/GarageSalePOS',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/garage-sale-pos',
        }
      ],
      year:'2015',
      interestNumber: 5,
      wasGroup: false
    },
    {
      title: 'Block Battle',
      description: 'Local multiplayer board game based of the popular board game Blokus.',
      reason: 'A project I worked on during my Mobile Apps course senior year.',
      languages: ['Typescript', 'React Native' ],
      imgSrc: '../../../assets/block-battle-home-crop.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/BlockBattle',
        },
        {
          linkImgSrc: '../../../assets/itch-io_logo.png',
          linkUrl: 'https://levoni.itch.io/block-battle',
        }
      ],
      year:'2018',
      interestNumber: 5,
      wasGroup: true
    }
  ]
  
  divAppear: boolean = true;
  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = "Year";
    this.selectChange();
  }

  selectChange() {
    if(this.selectedValue == "Year") {
      this.projectCardInfos.sort((a,b) => {
        if(a.year > b.year)
          return 1;
        else if (a.year < b.year)
          return -1;
        return 0
      });
    } else if (this.selectedValue == "Alphibetical") {
      this.projectCardInfos.sort((a,b) => {
        if(a.title > b.title)
          return 1;
        else if (a.title < b.title)
          return -1;
        return 0
      });
    } else if (this.selectedValue == "Interseting") {
      this.projectCardInfos.sort((a,b) => {
        if(a.interestNumber < b.interestNumber)
          return 1;
        else if (a.interestNumber > b.interestNumber)
          return -1;
        return 0
      });
    } else if (this.selectedValue == "Languages") {
      this.projectCardInfos.sort((a,b) => {
        if(a.languages > b.languages)
          return 1;
        else if (a.languages < b.languages)
          return -1;
        return 0
      });
    }
  }

  appear(event: any) {
    this.divAppear = event;
  }
}
