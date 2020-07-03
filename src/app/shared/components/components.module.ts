import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSchematicsComponentsModule } from './material-schematics/mat-schema-components.module';
import { UndrawSVGImagesModule } from './undraw-svg-images/undraw-svg-images.module';

/**COMPONENTS */
import { LoadingMiniComponent } from './loading-mini/loading-mini.component';

@NgModule({
    declarations: [
        LoadingMiniComponent
    ],
    imports: [
        CommonModule,
        UndrawSVGImagesModule,
        MatSchematicsComponentsModule
    ],
    exports: [
        LoadingMiniComponent,
        UndrawSVGImagesModule,
        MatSchematicsComponentsModule
    ]
})
export class ComponentsModule { }
