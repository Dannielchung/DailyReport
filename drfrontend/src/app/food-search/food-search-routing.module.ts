import { RouterModule, Routes } from '@angular/router';

import { FoodSearchComponent } from './food-search.component';
import { ForbiddenComponent } from '../forbidden';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../not-found';

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
