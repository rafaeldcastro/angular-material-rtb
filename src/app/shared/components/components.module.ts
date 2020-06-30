import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialSchematicsComponentsModule } from './material-schematics/material-schema-components.module';

/**COMPONENTS */
// import { 
     
// } from './index';

@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule,
        CommonModule,
        MaterialSchematicsComponentsModule
    ],
    exports: [
        MaterialSchematicsComponentsModule
    ]
})
export class ComponentsModule { }
