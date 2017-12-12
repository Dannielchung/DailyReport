// import {
//   ApiService,
//   AuthService,
//   ConfigService,
//   PttService,
//   UserService
// } from '../service';
// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FoodSearchComponent } from './food-Search.component';
// import { MockApiService } from '../service/mocks';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('FoodSearchComponent', () => {
//   let component: FoodSearchComponent;
//   let fixture: ComponentFixture<FoodSearchComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         FormsModule,
//         ReactiveFormsModule
//       ],
//       declarations: [
//         FoodSearchComponent
//       ],
//       providers: [
//         {
//           provide: ApiService,
//           useClass: MockApiService
//         },
//         AuthService,
//         PttService,
//         UserService,
//         ConfigService
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FoodSearchComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
