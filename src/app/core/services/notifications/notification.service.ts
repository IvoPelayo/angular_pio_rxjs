import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogResponse } from '../../components/confirm-dialog/confirm-dialog.component';
import { NotificationType } from '../../enums/notificationType';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmOptions, IConfirmOptions } from '../../models/confirmOptions';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  
    /** Displays a popup message at the top right corner of the page
   * defaultTitle and defaultMessage can be passed to override missing translation errors
   * titleParams and messageParams can be used to show custom text inside the message template
   */
  showToast(
    message: string,
    type: NotificationType = NotificationType.Bare,
    action?: string,
    timeOut: number = 3500): Observable<boolean> {
        const toast = this.snackBar.open(message, action, {
            duration: timeOut,
            panelClass: 'vy-snackbar-' + type.toString(),
            horizontalPosition: 'end',
            verticalPosition: 'top',
        });

        return toast.onAction().pipe(map(() => true));
  }

  /** Display a prompt dialog with basic Yes/No response
   *  To see more about dialog check the ConfirmDialogComponent class
   */
   presentConfirm(options?: IConfirmOptions): Observable<any> {
    options = new ConfirmOptions(options);

    const notificationRef = this.dialog.open(ConfirmDialogComponent, {
        width: options.width,
        role: 'alertdialog',
        data: {
          title: options.title,
          message: options.message,
          acceptButtonText: options.acceptButtonText,
          declineButtonText: options.declineButtonText,
        },
        disableClose: true,
    });

    return notificationRef.afterClosed()
        .pipe(
            map((result: ConfirmDialogResponse) => {
                if(result === ConfirmDialogResponse.Declined) {
                    throw(result);
                }

                return result;
            })
        );

    }

  /** Default success message for httpPost calls */
  saveSuccess(): void {
    this.showToast(
      'Registro guardado con éxito',
      NotificationType.Success,
    );
  }

  /** Default error message for httpPost calls */
  saveError(): void {
    this.showToast(
      'Hubo un problema procesando el registro',
      NotificationType.Error
    );
  }
}

