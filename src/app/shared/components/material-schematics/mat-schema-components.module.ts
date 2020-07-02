import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as matSchematics from './index';

@NgModule({
    declarations: [
        matSchematics.components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        matSchematics.modules
    ],
    exports: [
        matSchematics.components,
        matSchematics.modules
    ]
})
export class MatSchematicsComponentsModule { }
