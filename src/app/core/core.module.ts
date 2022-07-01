import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingOverlayComponent,
    AppLayoutComponent,
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    AppLayoutComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    LoadingOverlayComponent,
  ]
})
export class CoreModule { }
