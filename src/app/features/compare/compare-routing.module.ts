import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyListComponent } from './components/list/list.component';


const routes: Routes = [
  {
    path: 'list',
    component: DummyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
