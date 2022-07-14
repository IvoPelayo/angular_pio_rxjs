import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout/layout.service';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss']
})
export class BasicUsageComponent implements OnInit, OnDestroy {
  subs: SubSink = new SubSink();

  constructor(private layout: LayoutService, private notifications: NotificationService) { }

  ngOnInit(): void {
    this.subs.sink = this.layout.onLayoutChange.subscribe(() => this.notifications.showToast("Layout: " + this.layout.currentLayout));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
