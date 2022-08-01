import { NgModule } from '@angular/core';
import { EditDummyComponent } from './components/edit/edit.component';
import { CompareRoutingModule } from './compare-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DummyListComponent } from './components/list/list.component';
import { PromiseDummyManagerService } from './services/dummy-promise.service';


@NgModule({
  declarations: [
    EditDummyComponent,
    DummyListComponent,
  ],
  providers: [
    PromiseDummyManagerService
  ],
  imports: [
    SharedModule,
    CompareRoutingModule,
  ]
})
export class CompareModule { }
