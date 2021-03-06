import { NgModule } from '@angular/core';
import {
  RouterModule,
  Route,
  Routes,
} from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

const routes: Route[] | Routes = [
    {
        path: '',
        redirectTo: 'basic/home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
              path: 'basic',
              loadChildren: () => import('./features/basic-example/basic-example.module').then(m => m.BasicExampleModule)
            },
            {
              path: 'operators',
              loadChildren: () => import('./features/operators/operators.module').then(m => m.OperatorsModule)
            },
            {
              path: 'subsink',
              loadChildren: () => import('./features/subsink/subsink.module').then(m => m.SubsinkModule)
            },
            {
              path: 'complex',
              loadChildren: () => import('./features/complex/complex.module').then(m => m.ComplexModule)
            },
        ]
    },
    { path: '**', redirectTo: 'basic/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }