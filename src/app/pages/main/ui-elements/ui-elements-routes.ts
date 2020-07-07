import { Routes, RouterModule } from '@angular/router';
import { UiElementsComponent } from './ui-elements.component';

import { uiElementsRoutesNames } from './ui-elements-names';

const uiElementsRoutes: Routes = [
  {
    path: '',
    component: UiElementsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: uiElementsRoutesNames.BUTTONS.route
      },
      {
        path: uiElementsRoutesNames.BUTTONS.route,
        loadChildren: () => import('./buttons/buttons.module').then(m => m.UiElementsButtonsModule)
      },
    ]
  }
];

export const UI_ELEMENTS_ROUTES = RouterModule.forChild(uiElementsRoutes);