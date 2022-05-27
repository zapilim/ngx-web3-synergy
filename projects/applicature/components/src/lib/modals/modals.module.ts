import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AucProgressBarModule } from '../progress-bar';
import { AucRippleModule } from '../ripple';
import { AucSpinnerModule } from '../spinner';
import { AucButtonModule } from '../button';
import { AucInputModule } from '../input';
import { AucPipesModule } from '../pipes';
import { AucAccountModalComponent } from './account-modal';
import { AucTransferModalComponent } from './transfer-modal';
import { AucWrongNetworkModalComponent } from './wrong-network-modal';
import { AucIconModule } from '../icon';
import { AucDirectivesModule } from '../directives';
import { AucTransactionsModule } from '../transactions';
import { AucCopyToClipboardModule } from '../copy-to-clipboard';

const components = [
  AucAccountModalComponent,
  AucTransferModalComponent,
  AucWrongNetworkModalComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AucPipesModule,
    AucButtonModule,
    AucInputModule,
    AucRippleModule,
    AucSpinnerModule,
    AucProgressBarModule,
    AucIconModule,
    AucDirectivesModule,
    AucTransactionsModule,
    AucCopyToClipboardModule
  ]
})
export class ModalsModule {
}
