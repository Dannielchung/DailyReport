

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from './food-search.component';
import { NotFoundComponent } from '../not-found';
import { ForbiddenComponent } from '../forbidden';
export const routes: Routes = [
  {
    path: '',
    component: FoodSearchComponent,
    children:
    [
      // {path: 'list', component: ListComponent},
      // {path: '',component: L}
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
