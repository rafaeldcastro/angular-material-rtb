import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** MODULES */
import { UI_ELEMENTS_ROUTES } from './ui-elements-routes';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { UiElementsComponent } from './ui-elements.component';

@NgModule({
  declarations: [
    UiElementsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UI_ELEMENTS_ROUTES
  ],
  exports: [
    UiElementsComponent
  ]
})
export class UiElementsModule {}
