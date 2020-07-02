import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSchematicsComponentsModule } from './material-schematics/mat-schema-components.module';

/**COMPONENTS */
import { LoadingMiniComponent } from './loading-mini/loading-mini.component';

@NgModule({
    declarations: [
        LoadingMiniComponent
    ],
    imports: [
        CommonModule,
        MatSchematicsComponentsModule
    ],
    exports: [
        LoadingMiniComponent,
        MatSchematicsComponentsModule
    ]
})
export class ComponentsModule { }
