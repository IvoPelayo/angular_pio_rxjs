import { NgModule } from '@angular/core';

import { PipesRoutingModule } from './pipes-routing.module';
import { BuiltInComponent } from './components/built-in/built-in.component';
import { CustomComponent } from './components/custom/custom.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BuiltInComponent, CustomComponent],
  imports: [
    SharedModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
