import {Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export enum ConfirmDialogResponse {
  Accepted = 'accept',
  Declined = 'decline',
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onAccept() {
      this.dialogRef.close(ConfirmDialogResponse.Accepted);
    }

    onDecline() {
      this.dialogRef.close(ConfirmDialogResponse.Declined);
    }
}



