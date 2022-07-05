import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponent } from './components/custom/custom.component';
import { MostUsedComponent } from './components/most-used/most-used.component';
import { StackComponent } from './components/stack/stack.component';


const routes: Routes = [
  {
    path: 'most-used',
    component: MostUsedComponent
  },
  {
    path: 'stack',
    component: StackComponent
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
export class PipesRoutingModule { }
