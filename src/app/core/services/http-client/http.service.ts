import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethods } from '../../enums/http-methods';

/** Service used to do Http calls
 * - Unifies the request formats
 * - Added error catching and retry functionality
 */
@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(public http: HttpClient) { }

  public call<T = any>(request: IHttpServiceOptions): Observable<T> {
    let response: Observable<T>;

    switch (request.method) {
      case HttpMethods.GET:
        response = this.get(request.url, request.params, request.options);
        break;
      case HttpMethods.POST:
        response = this.post(request.url, request.body, request.options);
        break;
      case HttpMethods.PUT:
        response = this.put(request.url, request.body, request.options);
        break;
      case HttpMethods.DELETE:
        response = this.delete(request.url, request.options);
        break;
    }

    return response;
  }

  private get<T = any>(url: string, params: object | HttpParams = null, options: any = null): Observable<T> {
    return this.http.get<T>(
      url,
      this.getOptions(options, params)
    );
  }

  private post<T = any>(url: string, body: any = null, options: any = null): Observable<T> {
    return this.http.post<T>(url, body, this.getOptions(options));
  }

  private put<T = any>(url: string, body: any = null, options: any = null): Observable<T> {
    return this.http.put<T>(url, body, this.getOptions(options));
  }

  private delete<T = any>(url: string, options: any = null): Observable<T> {
    return this.http.delete<T>(url, this.getOptions(options));
  }

  private getOptions(options: any = null, params: any = null): object {
    return {
      params: params,
      responseType: 'json',
      observe: 'body',
      ...options,
    };
  }
}

export interface IHttpServiceOptions {
    url: string;
    method: HttpMethods;
    params?: object | HttpParams;
    body?: any;
    options?: object;
}
