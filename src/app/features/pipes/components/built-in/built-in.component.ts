import { SearchResult } from '../../../../shared/services/search/search.service';
import { Component } from '@angular/core';
import { forkJoin, throwError } from 'rxjs';
import { catchError, concatMap, debounceTime, finalize, map, retry, filter } from 'rxjs/operators';
import { SubscriptionComponent } from 'src/app/core/models/subscription.component';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Dummy } from 'src/app/shared/models/dummy';
import { DummyService } from 'src/app/shared/services/dummy/dummy.service';
import { concat } from 'lodash';
import { NotificationType } from 'src/app/core/enums/notificationType';
import { ConfirmOptions } from 'src/app/core/models/confirmOptions';

@Component({
  templateUrl: './built-in.component.html',
})
export class BuiltInComponent extends SubscriptionComponent {

  columns: string[] = [ 'name', 'lastName', 'birthDate', 'age'];
  data: Dummy[];
  text: string;

  constructor(public dummyService: DummyService, private notifications: NotificationService) {
    super();
  }

  // Map
  // CatchError
  // Finalize

  getData() {
    this.subs.sink = this.dummyService.search({ page: 1, pageSize: 10 })
    .pipe(
      map(res => res.data)
    ) 
    .subscribe(res => this.data = res);
  }

  // ConcatMap
  askBeforeGet() {
    this.subs.sink = this.notifications.presentConfirm(new ConfirmOptions({ message: '¿Desea cargar la información?' }))
    .pipe(
      catchError((error) => {
          this.notifications.showToast("Rechazado", NotificationType.Error);
          return throwError(error);
      }),
      concatMap(() => this.dummyService.search({ page: 1, pageSize: 10 })),
      map(res => res.data),
      finalize(() => {
        this.notifications.showToast("Terminado", NotificationType.Info);
      })
    ) 
    .subscribe(res => this.data = res);
  }

  // ForkJoin
  getTwoPages() {
    this.subs.sink = forkJoin([
      this.dummyService.search({ page: 1, pageSize: 10 }),
      this.dummyService.search({ page: 2, pageSize: 10 }),
    ])
    .pipe(
      map(res => {
        return new SearchResult<Dummy>(concat(res[0].data, res[1].data), res[0].paging).data;
      })
    ) 
    .subscribe(res => this.data = res);
  }

  // DebounceTime
  searchText(text: string) {
    this.subs.sink = this.dummyService.search({ page: 1, pageSize: 10, partialDescription: text })
    .pipe(
        debounceTime(15000),
        map(res => res.data),
    ) 
    .subscribe(res => this.data = res);
  }

  // Filter
  filterEmptyPages() {
    this.subs.sink = this.dummyService.search({ page: 1, pageSize: 10 })
    .pipe(
      filter(res => res.data.length > 0),
      map(res => res.data),
    ) 
    .subscribe(res => this.data = res);
  }

  // retry
  // retryWhen
   askMultipleTimes() {
    this.subs.sink = this.notifications.presentConfirm()
    .pipe(
      retry(2),
      catchError((error) => {
          this.notifications.showToast("Rechazado con ganas", NotificationType.Error);
          return throwError(error);
      }),
      concatMap(() => this.dummyService.search({ page: 1, pageSize: 10 })),
      map(res => res.data),
    ) 
    .subscribe(res => this.data = res);
  }
}
