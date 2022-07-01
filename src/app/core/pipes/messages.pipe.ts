import { Observable, pipe, UnaryFunction } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';

export function saveMessages<T>(notifications: NotificationService): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(
      map((inputObject) => {
        notifications.saveSuccess();
        return inputObject;
      },
      catchError(error => {
          notifications.saveError();
          return error;
      }))
    );
}