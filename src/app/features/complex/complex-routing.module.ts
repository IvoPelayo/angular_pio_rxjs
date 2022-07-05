import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreToolsComponent } from './components/core-tools/core-tools.component';
import { FlowComponent } from './components/flow/flow.component';


const routes: Routes = [
  {
    path: 'core-tools',
    component: CoreToolsComponent
  },
  {
    path: 'flow',
    component: FlowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexRoutingModule { }
