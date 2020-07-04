import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as undrawPictures from './index';

@NgModule({
    declarations: [
        undrawPictures.components
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        undrawPictures.components
    ]
})
export class UndrawSVGImagesModule { }
