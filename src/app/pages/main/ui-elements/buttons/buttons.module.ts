import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { UiElementsButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    UiElementsButtonsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UiElementsButtonsComponent
      }
    ])
  ],
  exports: [
    UiElementsButtonsComponent
  ]
})
export class UiElementsButtonsModule {}
