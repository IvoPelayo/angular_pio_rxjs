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