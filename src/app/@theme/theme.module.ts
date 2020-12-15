import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  CORPORATE_THEME,
  COSMIC_THEME, DARK_THEME,
  DEFAULT_THEME,
  NbActionsModule, NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule, NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule, NbThemeModule, NbTooltipModule,
  NbUserModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { NodataInfoStatusComponent } from './components/nodata-info-status/nodata-info-status.component';

const NB_MODULES = [
  // Layout
  NbLayoutModule, NbListModule, NbActionsModule, NbSidebarModule, NbMenuModule,
  // Nb Components
  NbButtonModule, NbCardModule, NbContextMenuModule, NbTabsetModule, NbListModule,
  NbTabsetModule, NbDialogModule, NbTooltipModule,
  // Forms
  NbFormFieldModule, NbInputModule, NbRadioModule, NbSelectModule, NgSelectModule,
  // Icons
  NbEvaIconsModule, NbIconModule,
  // Others
  NbUserModule,
];

const CUSTOM_COMPONENTS = [
  HeaderComponent, FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    ...NB_MODULES,
  ],
  declarations: [
    ...CUSTOM_COMPONENTS,
    NodataInfoStatusComponent
  ],
    exports: [
        CommonModule,
        ...CUSTOM_COMPONENTS,
        ...NB_MODULES,
        NodataInfoStatusComponent,
    ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
      ],
    };
  }
}
