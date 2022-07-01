/**
 * Crew Core generic search method order parameters
 */
export interface IOrderByCriteria {
    orderBy?: string;
    orderByDirection?: OrderByDirection;
}

/**
 * basic interface for Crew Core generic search method parameters
 */
export interface ISearchCriteria extends IOrderByCriteria {
  page: number;
  pageSize?: number;
  partialDescription?: string;
  [key: string]: any;
}

/**
 * Crew Core generic search method order parameters
 */
export enum OrderByDirection {
    Ascending = 'asc',
    Descending = 'desc',
    None = '',
}

/**
 * Model for Crew Core generic search method results
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

export interface ISearchResultPaging {
    page: number;
    pageCount: number;
    totalRecordCount: number;
}
