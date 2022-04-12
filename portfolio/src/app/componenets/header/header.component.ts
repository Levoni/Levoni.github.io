import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToElement(element: string) {
    var domElement = document.getElementById(element);

    if(domElement != null) {
      var top = domElement.offsetTop - 60;
      window.scroll({
        top:top,
        behavior:"smooth"
      })
    }
  }

  goToTop () {
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }
}
