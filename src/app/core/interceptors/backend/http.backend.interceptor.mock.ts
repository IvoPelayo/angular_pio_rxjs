import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InterceptorMockResponses } from './responses';

/**
 * Angular HttpInterceptor used to mock responses from the server.
 * Its only injected on the main module if environment.use_mock is set to true (local environment only)
 */
@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = request.url;
        if (request.url.indexOf('?') !== -1) {
            url = request.url.substring(0, request.url.indexOf('?') - 1 );
        }
        for (const element of InterceptorMockResponses) {
            if (url === element.url && (!element.method || element.method.toString() === request.method)) {
                console.log('Loaded from mock : ' + request.url);
                return of(new HttpResponse({ status: 200, body: element.json, headers: element.headers }));
            }
        }
        return next.handle(request);
    }
}

