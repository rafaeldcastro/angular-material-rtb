import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

import { CoreBaseView } from '@core/shared/classes/core-base-view';
import { uiElementsRoutesNames } from './ui-elements/ui-elements-names';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPagesComponent extends CoreBaseView {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  menu;

  constructor(private breakpointObserver: BreakpointObserver) {
    super();
    this.factoryMenu();
  }

  private factoryMenu() {
    let routes = this.mainRoutes;

    routes.UI_ELEMENTS['submenu'] = [];
    for (var x in uiElementsRoutesNames) {
      uiElementsRoutesNames.hasOwnProperty(x) && routes.UI_ELEMENTS['submenu'].push(uiElementsRoutesNames[x])
    }

    this.menu = routes;
  }
}
