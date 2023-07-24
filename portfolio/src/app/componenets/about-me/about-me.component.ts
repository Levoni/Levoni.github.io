import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  age: number =  Math.floor((new Date().getTime() -  new Date('06/25/1997').getTime()) / 1000 / 60 /60 / 24 / 365)
  constructor() { }

  ngOnInit(): void {
  }
  divclass: boolean = false;
  
  test(e: any) {
    this.divclass = e;
  }
}
