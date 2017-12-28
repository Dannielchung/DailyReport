import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AdminGuard, GuestGuard, LoginGuard } from './guard';
import {
  ApiCardComponent,
  FooterComponent,
  GithubComponent,
  HeaderComponent
} from './component';
import {
  ApiService,
  AuthService,
  ConfigService,
  FooService,
  InstagramService,
  PttService,
  UserService
} from './service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AccountMenuComponent } from './component/header/account-menu/account-menu.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FoodAreaComponent } from './food-area/food-area.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login';
import { NotFoundComponent } from './not-found';
import { TimesComponent } from './component/header/times/times.component';

// material


















export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    TimesComponent,
    ChangePasswordComponent,
    FoodSearchComponent,
    ForbiddenComponent,
    AdminComponent,
    FoodAreaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    LoginGuard,
    GuestGuard,
    AdminGuard,
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    PttService,
    InstagramService,
    MatIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
