import { Component, OnInit, Input } from '@angular/core';
import {
  ConfigService,
  AuthService,
  UserService,
  TimesService
} from '../../../service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss'],
  providers: [TimesService]
})

export class TimesComponent implements OnInit {
  // TODO define user interface
  user: any;
  nowTimes = 10;
  timesSubscription: Subscription;
  displayTimes: String;
  displaySubscription: Subscription;

  constructor(
    private config: ConfigService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private timesService: TimesService,
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser;
    const observer = {
      next: (value) => {
        console.log(value)
        this.nowTimes = value;
        if (this.nowTimes === 0) {
          this.logout();
        }
      },
      error: (error) => {console.log(error)},
      complete: () => {console.log('complete')}
    }
    // this.timesSubscription = this.timesService.nowTime$.subscribe(observer);

    this.displaySubscription = this.timesService.displayTime$.subscribe({
      next: (value) => {
        this.displayTimes = value;
      },
      error: (error) => {console.log(error)},
      complete: () => {this.logout()}
    });
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
      // this.timesSubscription.unsubscribe();
      this.displaySubscription.unsubscribe();
    });

  }
}
