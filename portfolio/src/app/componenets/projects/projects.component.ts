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
      year:'2021',
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
    },
    {
      title: 'Game Engine',
      description: 'A c# based game engine which utilizes the MonoGame framework.',
      reason: 'A game engine that utilizes ECS architecture and the Monogame framework. It also has systems already built for file IO, input management, basic collisoin detection/physics',
      languages: ['C#', 'MonoGame'],
      imgSrc: '../../../assets/c_sharp_logo.png',
      LinkInfo: [
        {
          linkImgSrc: '../../../assets/github_logo.png',
          linkUrl: 'https://github.com/Levoni/GameEngine',
        }
      ],
      year:'2020',
      interestNumber: 8
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
      interestNumber: 8
    },
    {
      title: 'Dungeon Maze',
      description: 'A game where you fight through a maze to get the highest score',
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
      interestNumber: 8
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
