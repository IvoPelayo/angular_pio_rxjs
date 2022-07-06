import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpMethods } from 'src/app/core/enums/http-methods';
import { HttpService } from 'src/app/core/services/http-client/http.service';

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

/**
 * Generic search method order parameters
 */
 export interface IOrderByCriteria {
  orderBy?: string;
  orderByDirection?: OrderByDirection;
}

/**
* basic interface for generic search method parameters
*/
export interface ISearchCriteria extends IOrderByCriteria {
page: number;
pageSize?: number;
partialDescription?: string;
[key: string]: any;
}

/**
* Generic search method order parameters
*/
export enum OrderByDirection {
  Ascending = 'asc',
  Descending = 'desc',
  None = '',
}

/**
* Model for generic search method results
*/
export class SearchResult<T> {
  data: T[];
  paging: ISearchResultPaging;

  constructor(data?: any[], paging?: ISearchResultPaging) {
      this.data = data || [];
      this.paging = paging || {
          page: 1,
          pageCount: 1,
          totalRecordCount: this.data.length
      };
  }

  get endReached(): boolean {
      return this.data.length === 0 || this.paging.pageCount <= this.paging.page;
  }
}

/**
* generic interface for search pagination data
*/
export interface ISearchResultPaging {
  page: number;
  pageCount: number;
  totalRecordCount: number;
}
