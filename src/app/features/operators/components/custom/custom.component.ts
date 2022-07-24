import { Component } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { SubscriptionComponent } from 'src/app/core/models/subscription.component';
import { showLoader } from 'src/app/core/pipes/loader.pipe';
import { saveMessages } from 'src/app/core/pipes/messages.pipe';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Dummy } from 'src/app/shared/models/dummy';
import { DummyService } from 'src/app/shared/services/dummy/dummy.service';

@Component({
  templateUrl: './custom.component.html',
})
export class CustomComponent  extends SubscriptionComponent {

  columns: string[] = [ 'name', 'lastName', 'birthDate', 'age', 'actions'];
  data: Dummy[];

  constructor(public dummyService: DummyService, private notifications: NotificationService, private loader: LoaderService) {
    super();
  }

  getData() {
    this.subs.sink = this.dummyService.search({ page: 1, pageSize: 10 })
    .pipe(
      showLoader(this.loader),
      map(res => res.data)
    ) 
    .subscribe(res => this.data = res);
  }

  save(dummy: Dummy) {
    this.subs.sink = this.dummyService.save(dummy).pipe(
      showLoader(this.loader),
      saveMessages(this.notifications),
    )
    .subscribe(() => this.getData());
  }

}
