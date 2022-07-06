import { StringEnum } from './../../../core/enums/string-enum-type';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { EndPoints } from "src/app/core/enums/endpoints";
import { HttpService } from "src/app/core/services/http-client/http.service";
import { Dummy } from "../../models/dummy";
import { ISearchCriteria, SearchResult, SearchService } from "../search/search.service";
import { map as rxjsMap } from 'rxjs/operators';
import { map } from 'lodash';
import { HttpMethods } from 'src/app/core/enums/http-methods';

Injectable()
export class DummyService extends SearchService<Dummy>{
    private _controller: StringEnum =  EndPoints.webApiBaseUrl.add('dummy');
    constructor(private apiService: HttpService) {
        super(apiService, EndPoints.webApiBaseUrl.add('dummy').add('search').toString());
    }
  
    searchMapped(criteria: ISearchCriteria): Observable<SearchResult<Dummy>> {
      return this.search(criteria).pipe(
        rxjsMap(res => {
            res.data = map(res.data, d => new Dummy(d))
            return res;
        })
      );
    }

    getById(dummyId: number): Observable<Dummy> {
        return this.apiService.call<Dummy>({
            url: this._controller.add(dummyId.toString()).toString(),
            method: HttpMethods.GET
        }).pipe(
            rxjsMap(res => new Dummy(res))
        );
    }

    save(dummy: Dummy): Observable<Dummy> {
        return this.apiService.call<Dummy>({
            url: this._controller.toString(),
            method: HttpMethods.POST
        }).pipe(
            rxjsMap(res => new Dummy(res))
        );
    }
}