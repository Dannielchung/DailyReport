import { AuthService, PttService } from './../service/';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DisplayMessage } from '../shared/models/display-message';
import { PttFood } from '../shared/models/foods';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent implements OnInit {

  notification: DisplayMessage;
  foods: PttFood[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private pttService: PttService
  ) {
  }
  ngOnInit() {

    this.notification = undefined;

    this.pttService.getPttFoods()
    // show me the animation
    .delay(1000)
    .subscribe((resp) => {
      this.foods = resp.slice(0);
    }, error => {
      this.notification = { msgType: 'error', msgBody: 'Invalid old password.'};
    });

  }
}
