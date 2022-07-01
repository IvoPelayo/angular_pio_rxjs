
import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './services/notifications/components/confirm-dialog/confirm-dialog.component';
import { LoadingOverlayComponent } from './services/loader/components/loading-overlay/loading.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    SharedModule,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    LoadingOverlayComponent,
  ]
})
export class CoreModule { }
