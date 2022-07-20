import { SearchResult } from './../../../../shared/services/search/search.service';
import { Component } from '@angular/core';
import { DummyService } from 'src/app/shared/services/dummy/dummy.service';
import { Dummy } from 'src/app/shared/models/dummy';
import { from, fromEvent, Observable } from 'rxjs';

@Component({
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent {
  columns: string[] = [ 'name', 'lastName', 'birthDate'];
  data: SearchResult<Dummy>;

  constructor(public dummyService: DummyService) { }

  getData(): Observable<SearchResult<Dummy>> {
    return this.dummyService.search({ page: 1, pageSize: 10 });
  }

  getDataWithSubscription() {
    this.getData().subscribe(res => {
      this.data = res;
    });
  }
}
