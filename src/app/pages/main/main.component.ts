import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

import { mainRoutesNames } from './main-routes-names';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPagesComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  mainRoutes = mainRoutesNames;

  menu = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: 'DASHBOARD'
    },
    {
      icon: 'menu_book',
      label: 'Parent Menu 1',
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
        }
      ]
    },
    {
      icon: 'email',
      label: 'Parent Menu 2',
      route: '',
      submenu: [
        {
          icon: 'home',
          label: 'Dashboard',
          route: 'DASHBOARD'
        }
      ]
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver) { }

}
