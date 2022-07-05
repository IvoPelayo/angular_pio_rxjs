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
        redirectTo: 'basic/subscription',
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
              path: 'pipes',
              loadChildren: () => import('./features/pipes/pipes.module').then(m => m.PipesModule)
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
    { path: '**', redirectTo: 'basic/subscription' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }