import { AuthService, InstagramService } from '../service';
import { Component, ElementRef, OnInit } from '@angular/core';

import { Area } from '../shared/models/foods';
import { DisplayMessage } from '../shared/models/display-message';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-food-area',
  templateUrl: './food-area.component.html',
  styleUrls: ['./food-area.component.scss']
})
export class FoodAreaComponent implements OnInit {
  scores = {};
  scorelist = {list: []};
  selectedItem = '大同區';

  clouds: Area[] = [
    {id: 0, name: '大同區'},
    {id: 1, name: '中正區'},
    {id: 2, name: '中山區'},
    {id: 3, name: '松山區'},
    {id: 4, name: '大安區'},
    {id: 5, name: '萬華區'},
    {id: 6, name: '信義區'},
    {id: 7, name: '士林區'},
    {id: 8, name: '北投區'},
    {id: 9, name: '內湖區'},
    {id: 10, name: '南港區'},
    {id: 11, name: '文山區'},
    {id: 12, name: '萬里區'},
    {id: 13, name: '金山區'},
    {id: 14, name: '板橋區'},
    {id: 15, name: '汐止區'},
    {id: 16, name: '深坑區'},
    {id: 17, name: '石碇區'},
    {id: 18, name: '瑞芳區'},
    {id: 19, name: '平溪區'},
    {id: 20, name: '雙溪區'},
    {id: 16, name: '貢寮區'},
    {id: 17, name: '坪林區'},
    {id: 18, name: '烏來區'},
    {id: 19, name: '永和區'},
    {id: 20, name: '中和區'},
    {id: 21, name: '土城區'},
    {id: 22, name: '三峽區'},
    {id: 23, name: '樹林區'},
    {id: 24, name: '鶯歌區'},
    {id: 25, name: '三重區'},
    {id: 26, name: '新莊區'},
    {id: 27, name: '泰山區'},
    {id: 28, name: '林口區'},
    {id: 29, name: '蘆洲區'},
    {id: 30, name: '五股區'},
    {id: 31, name: '八里區'},
    {id: 32, name: '淡水區'},
    {id: 33, name: '三芝區'},
    {id: 34, name: '石門區'}
  ];

  notification: DisplayMessage;

  constructor(
    private el: ElementRef,
    private authService: AuthService,
    private router: Router,
    private instagramService: InstagramService) { }

  ngOnInit() {
    this.notification = undefined;
    this.getAreaScores();
    this.selectedItem = (<HTMLSelectElement>event.target).value;
    const s = document.createElement('script');
    s.type = 'text/javascript';
    console.log('WordCloud(document.getElementById(\'cloud\'),' + JSON.stringify(this.scorelist) + ')');
    s.innerHTML = 'WordCloud(document.getElementById(\'cloud\'),' + JSON.stringify(this.scorelist) + ')';
    this.el.nativeElement.appendChild(s);
  }

  onChange(event: Event) {
    this.selectedItem = (<HTMLSelectElement>event.target).value;
    this.getAreaScores();
  }
getAreaScores() {
    console.log(this.selectedItem)
    this.scorelist['list'] = [];
    this.instagramService.getInstagramScores(this.selectedItem)
    // show me the animation
    .delay(1000)
    .subscribe((resp) => {
      this.scores = resp;
      // tslint:disable-next-line:forin
      for ( const key in this.scores ) {
          const keys = [];
          keys.push(key);
          keys.push(this.scores[key])
          this.scorelist['list'].push(keys);
      }
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.innerHTML = 'WordCloud(document.getElementById(\'cloud\'),' + JSON.stringify(this.scorelist) + ')';
      // this.elementRef
      this.el.nativeElement.replaceChild(s, this.el.nativeElement.querySelector('script'));
      console.log( this.scorelist )
    }, error => {
      this.notification = { msgType: 'error', msgBody: 'Invalid old password.'};
    });
  }

}
