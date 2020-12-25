import {NgModule} from '@angular/core';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        MiscellaneousModule,
        ThemeModule,
    ],
    exports: [
    ],
    declarations: [
        PagesComponent,
    ]
})
export class PagesModule {
}
