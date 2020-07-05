import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import * as demoComponents from './index';

@NgModule({
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
