import { NgModule } from '@angular/core';

import { BasicExampleRoutingModule } from './basic-example-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptorComponent } from './components/subscriptor/subscriptor.component';


@NgModule({
  declarations: [
    SubscriptionComponent,
    SubscriptorComponent
  ],
  imports: [
    SharedModule,
    BasicExampleRoutingModule
  ]
})
export class BasicExampleModule { }
