import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from 'src/app/core/models/subscription.component';
import { LayoutService } from 'src/app/core/services/layout/layout.service';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';

@Component({
  selector: 'app-global-usage',
  templateUrl: './global-usage.component.html',
  styleUrls: ['./global-usage.component.scss']
})
export class GlobalUsageComponent extends SubscriptionComponent implements OnInit {

  constructor(private layout: LayoutService, private notifications: NotificationService) {
    super();
  }

  ngOnInit(): void {
    this.subs.sink = this.layout.onLayoutChange.subscribe(() => this.notifications.showToast("Layout: " + this.layout.currentLayout));
  }
}
