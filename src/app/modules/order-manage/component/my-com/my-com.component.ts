import { Component, OnInit } from '@angular/core';
/*tslint:disable*/
@Component({
  selector: 'myCom',
  template: `
    <div>i am a dynamic component</div>
  `,
  styles: [`
    div {
      color: lightblue;
    }
  `]
})
export class MyComComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
