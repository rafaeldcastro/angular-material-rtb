import { NgModule } from '@angular/core';

import * as matSchematics from './index';

@NgModule({
    declarations: [
        matSchematics.components
    ],
    imports: [
        matSchematics.modules
    ],
    exports: [
        matSchematics.components
    ]
})
export class MatSchematicsComponentsModule { }
