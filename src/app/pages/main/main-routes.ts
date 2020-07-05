import { Routes, RouterModule } from '@angular/router';
import { MainPagesComponent } from './main.component';

import { mainRoutesNames } from './main-routes-names';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: mainRoutesNames.HOME.route
      },
      {
        path: mainRoutesNames.HOME.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);