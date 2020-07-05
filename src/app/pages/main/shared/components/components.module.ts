import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import * as mainComponents from './index';

@NgModule({
    declarations: [
        mainComponents.components
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        mainComponents.components
    ]
})
export class MainComponentsModule { }
