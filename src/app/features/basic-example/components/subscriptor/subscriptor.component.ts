import { LayoutService } from './../../../../core/services/layout/layout.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './subscriptor.component.html'
})
export class SubscriptorComponent implements OnInit, OnDestroy {
  private layoutSub: Subscription;
  constructor(private layout: LayoutService, private notifications: NotificationService) { }

  ngOnInit(): void {
    this.layoutSub = this.layout.onLayoutChange.subscribe(() => this.notifications.showToast("Layout: " + this.layout.currentLayout));
  }


  ngOnDestroy(): void {
    this.layoutSub.unsubscribe();
  }
}
