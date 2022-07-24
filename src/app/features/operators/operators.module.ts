import { NgModule } from '@angular/core';

import { BuiltInComponent } from './components/built-in/built-in.component';
import { CustomComponent } from './components/custom/custom.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperatorsRoutingModule } from './operators-routing.module';


@NgModule({
  declarations: [BuiltInComponent, CustomComponent],
  imports: [
    SharedModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
