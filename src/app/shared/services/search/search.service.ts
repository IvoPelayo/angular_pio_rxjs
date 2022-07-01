import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpMethods } from 'src/app/core/enums/http-methods';
import { HttpService } from 'src/app/core/services/http-client/http.service';
import { ISearchCriteria, SearchResult } from '../../models/search';

/** Parent class for services that are dependant to CrewService
 * At the moment only prefetchs the crew data to avoid downtimes
 */
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
