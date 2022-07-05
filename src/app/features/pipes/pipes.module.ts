import { NgModule } from '@angular/core';

import { PipesRoutingModule } from './pipes-routing.module';
import { MostUsedComponent } from './components/most-used/most-used.component';
import { StackComponent } from './components/stack/stack.component';
import { CustomComponent } from './components/custom/custom.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MostUsedComponent, StackComponent, CustomComponent],
  imports: [
    SharedModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
