import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="tips-wrap">
      <p>{{name}}</p>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {
  public name: string = "";
  constructor() { }

  ngOnInit() {
  }
  
}
