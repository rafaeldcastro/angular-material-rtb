import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import * as demoComponents from './index';

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    declarations: [
        demoComponents.components
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        demoComponents.components
    ]
})
export class DemoComponentsModule { }
