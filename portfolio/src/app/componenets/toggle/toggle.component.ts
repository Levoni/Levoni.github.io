import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Output() toggle: EventEmitter<boolean>| any = new EventEmitter<boolean>();
  isOn: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isOn = !this.isOn;
    this.toggle.emit(this.isOn);
  }

}
