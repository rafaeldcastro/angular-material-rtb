import { NgModule } from '@angular/core';

import { MatSchematicsComponentsModule } from './material-schematics/mat-schema-components.module';

/**COMPONENTS */
import { LoadingMiniComponent } from './loading-mini/loading-mini.component';
// import { 
     
// } from './index';

@NgModule({
    declarations: [
        LoadingMiniComponent
    ],
    imports: [
        MatSchematicsComponentsModule
    ],
    exports: [
        LoadingMiniComponent,
        MatSchematicsComponentsModule
    ]
})
export class ComponentsModule { }
