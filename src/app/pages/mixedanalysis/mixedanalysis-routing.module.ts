import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MixedCharttabsViewComponent} from './mixed-charttabs-view/mixed-charttabs-view.component';

const routes: Routes = [{
    path: '',
    component: MixedCharttabsViewComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MixedanalysisRoutingModule {
}
