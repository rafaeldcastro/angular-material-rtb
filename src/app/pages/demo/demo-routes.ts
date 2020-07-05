import { Routes, RouterModule } from '@angular/router';
import { DemoPagesComponent } from './demo.component';

import { demoRoutesNames } from './demo-routes-names';

const mainRoutes: Routes = [
  {
    path: '',
    component: DemoPagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: demoRoutesNames.HOME.route
      },
      {
        path: demoRoutesNames.HOME.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

export const DEMO_ROUTES = RouterModule.forChild(mainRoutes);