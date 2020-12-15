import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './tables/table/table.component';
import {TableColumnSortComponent} from './tables/table-column-sort/table-column-sort.component';
import {ColumnSortableDirective} from './tables/column-sortable.directive';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../../../@theme/theme.module';


@NgModule({
    declarations: [
        TableComponent,
        TableColumnSortComponent,
        ColumnSortableDirective
    ],
    imports: [
        CommonModule,
        ThemeModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        TableComponent,
        TableColumnSortComponent,
        ColumnSortableDirective
    ]
})
export class CustomTableModule {
}
