import { mainRoutesNames } from './../../../../../../main/main-routes-names';

import { Component } from '@angular/core';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {

  mainRoutes = mainRoutesNames;

  menu = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: 'DASHBOARD'
    },
    {
      icon: 'menu_book',
      label: 'Parent Menu',
      route: '',
      submenu: [
        {
          icon: 'home',
          label: 'Dashboard',
          route: 'DASHBOARD'
        },
        {
          icon: 'home',
          label: 'Dashboard',
          route: 'DASHBOARD'
        },
      ]
    }
  ]
  
  constructor() {
  }

}
