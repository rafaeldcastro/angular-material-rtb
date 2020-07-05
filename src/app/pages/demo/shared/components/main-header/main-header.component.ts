import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  @Output() sidenavClose = new EventEmitter<any>();
  
  constructor() {}

  drawerToggle(){
    this.sidenavClose.emit();
  }
}
