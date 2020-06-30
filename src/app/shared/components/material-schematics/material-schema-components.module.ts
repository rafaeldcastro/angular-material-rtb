import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';

/**COMPONENTS */

import {
    TreeComponent,
    NavigationComponent,
    TableComponent,
    DragDropComponent,
    DashboardComponent,
    AddressFormComponent
} from './index';

@NgModule({
    declarations: [
        TreeComponent,
        NavigationComponent,
        TableComponent,
        DragDropComponent,
        DashboardComponent,
        AddressFormComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        MatTreeModule,
        DragDropModule
    ],
    exports: [
        TreeComponent,
        NavigationComponent,
        TableComponent,
        DragDropComponent,
        DashboardComponent,
        AddressFormComponent
    ]
})
export class MaterialSchematicsComponentsModule { }
