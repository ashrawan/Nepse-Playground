import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemeModule} from './@theme/theme.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbDialogModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbToastrModule, NbWindowModule} from '@nebular/theme';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './@core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NbThemeModule.forRoot(),
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        ThemeModule.forRoot(),
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
