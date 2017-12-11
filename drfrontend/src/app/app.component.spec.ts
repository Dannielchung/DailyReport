import {
  ApiCardComponent,
  FooterComponent,
  GithubComponent,
} from './component';
import {
  ApiService,
  AuthService,
  ConfigService,
  FooService,
  PttService,
  UserService
} from './service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconRegistry,
  MatToolbarModule
} from '@angular/material';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { LoginGuard } from './guard';
import { MockApiService } from './service/mocks/api.service.mock';
import { NotFoundComponent } from './not-found';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
      ],
      imports: [
        RouterTestingModule,
        MatToolbarModule
      ],
      providers: [
        MatIconRegistry,
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService,
        PttService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
