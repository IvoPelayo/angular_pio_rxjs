import { HttpService } from '@core/services/http-client/http.service';
import { Injectable } from '@angular/core';
import { ISearchCriteria, SearchResult } from '@shared/models/search';
import { Observable } from 'rxjs';
import { HttpMethods } from '@core/enums/http-methods';
import { map } from 'rxjs/operators';

/** Parent class for services that are dependant to CrewService
 * At the moment only prefetchs the crew data to avoid downtimes
 */
@Injectable()
export class SearchService<T>{
  private _searchUrl: string;

  constructor(private http: HttpService, searchUrl: string) {
    this._searchUrl = searchUrl;
 }

  search(criteria: ISearchCriteria): Observable<SearchResult<T>> {
    return this.http.call<SearchResult<T>>({
        method: HttpMethods.GET,
        url: this._searchUrl,
        params: criteria,
    }).pipe(
        map(res => new SearchResult(res.data, res.paging))
    );
  }
}
