import { AdminGuard, GuestGuard } from './guard';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password';
import { FoodAreaComponent } from './food-area';
import { FoodSearchComponent } from './food-search';
import { ForbiddenComponent } from './forbidden';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { LoginGuard } from './guard';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'area-food-search',
    // loadChildren: 'food-search/food-search.module#FoodSearchModule',
    component: FoodAreaComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'food-search',
    // loadChildren: 'food-search/food-search.module#FoodSearchModule',
    component: FoodSearchComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
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
