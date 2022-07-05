import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexRoutingModule } from './complex-routing.module';
import { CoreToolsComponent } from './components/core-tools/core-tools.component';
import { FlowComponent } from './components/flow/flow.component';


@NgModule({
  declarations: [CoreToolsComponent, FlowComponent],
  imports: [
    CommonModule,
    ComplexRoutingModule
  ]
})
export class ComplexModule { }
