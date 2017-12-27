import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-area',
  templateUrl: './food-area.component.html',
  styleUrls: ['./food-area.component.css']
})
export class FoodAreaComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = 'WordCloud(document.getElementById(\'cloud\'),{list:[[\'foo\',80],[\'bar\',60]]})';
    // this.elementRef
    this.el.nativeElement.appendChild(s);
  }

}
