import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';

/**
 * Angular HttpInterceptor used to mock responses from the server.
 * Its only injected on the main module if environment.use_mock is set to true (local environment only)
 */
@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(private notifications: NotificationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            //map((event: HttpEvent<any>) =>  event),
            catchError((error: HttpErrorResponse) => {
                this.notifications.serverError();
                return throwError(error);
            })
        );
    }
}

