import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponent } from './components/custom/custom.component';
import { BuiltInComponent } from './components/built-in/built-in.component';


const routes: Routes = [
  {
    path: 'built-in',
    component: BuiltInComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
