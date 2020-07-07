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
        redirectTo: mainRoutesNames.DASHBOARD.route
      },
      {
        path: mainRoutesNames.CHARTS.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.DASHBOARD.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.EXAMPLE_PAGES.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.FORMS.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.HELPER_CLASSES.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.MISCELLANEOUS.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.TABLES.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.TYPOGRAFY.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainRoutesNames.UI_ELEMENTS.route,
        loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule)
      },
      {
        path: mainRoutesNames.WIDGETS.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);