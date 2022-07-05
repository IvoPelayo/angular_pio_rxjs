import { SubscriptionComponent } from './components/subscription/subscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptorComponent } from './components/subscriptor/subscriptor.component';


const routes: Routes = [
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'subscriptor',
    component: SubscriptorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicExampleRoutingModule { }
