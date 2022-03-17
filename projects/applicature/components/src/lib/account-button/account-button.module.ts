import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '../avatar/avatar.module';
import { AucButtonModule } from '../renamed/button';
import { PipesModule } from '../pipes';
import { AccountButtonComponent } from './account-button.component';
import { ApplicatureCopyToClipboardModule } from '../applicature-copy-to-clipboard';
import { ApplicatureDirectivesModule } from '../directives';
import { ApplicatureDropdownMenuModule } from '../applicature-dropdown-menu';

@NgModule({
  declarations: [
    AccountButtonComponent,
  ],
  exports: [
    AccountButtonComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    PipesModule,
    AucButtonModule,
    ApplicatureCopyToClipboardModule,
    ApplicatureDirectivesModule,
    ApplicatureDropdownMenuModule,
  ]
})
export class AccountButtonModule {
}
