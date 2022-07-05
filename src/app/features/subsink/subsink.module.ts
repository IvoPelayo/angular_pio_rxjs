import { NgModule } from '@angular/core';
import { SubsinkRoutingModule } from './subsink-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicUsageComponent } from './components/basic-usage/basic-usage.component';
import { GlobalUsageComponent } from './components/global-usage/global-usage.component';



@NgModule({
  declarations: [
    BasicUsageComponent,
    GlobalUsageComponent,
  ],
  imports: [
    SharedModule,
    SubsinkRoutingModule,
  ]
})
export class SubsinkModule { }
