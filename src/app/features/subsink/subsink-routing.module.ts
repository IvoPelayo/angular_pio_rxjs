import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicUsageComponent } from './components/basic-usage/basic-usage.component';
import { GlobalUsageComponent } from './components/global-usage/global-usage.component';


const routes: Routes = [
  {
    path: 'basic-usage',
    component: BasicUsageComponent
  },
  {
    path: 'global-usage',
    component: GlobalUsageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsinkRoutingModule { }
