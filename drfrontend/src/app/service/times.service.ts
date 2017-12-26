import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class TimesService {

  nowTime$: Observable<any>;
  displayTime$: Observable<any>;
  // Length ms
  TimeOut = 990000000;
  // Interval ms
  TimeGap = 1000;
  CurrentTime = ( new Date() ).getTime();
  EndTime = ( new Date() ).getTime() + this.TimeOut;

  constructor() {
    this.displayTime$ = Observable.create((observer) => {
      setInterval(() => {
        if ( this.CurrentTime + this.TimeGap < this.EndTime ) {
          this.CurrentTime += this.TimeGap;
          const Time = new Date();
          Time.setTime( this.EndTime - this.CurrentTime );
          const Minutes = Time.getMinutes();
          const Seconds = Time.getSeconds();
          observer.next((Minutes < 10 ? '0' : '') + Minutes + ':' + (Seconds < 10 ? '0' : '') + Seconds);
        } else {
          observer.complete();
        }
      }, 1000)
    });

    this.nowTime$ = Observable.create((observer: Observer<any>) => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          observer.next(10 - i);
          if (i === 10) {
            observer.complete();
          }
        }, i * 1000);
      }
    });
  }
}
