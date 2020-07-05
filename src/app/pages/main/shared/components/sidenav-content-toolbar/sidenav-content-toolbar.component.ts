import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-sidenav-content-toolbar',
  templateUrl: './sidenav-content-toolbar.component.html',
  styleUrls: ['./sidenav-content-toolbar.component.scss']
})
export class SidenavContentToolbarComponent {

  @Output() drawerToggleEmitter = new EventEmitter<any>();
  
  constructor() {}

  drawerToggle(){
    this.drawerToggleEmitter.emit();
  }
}
