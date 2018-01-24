import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyComComponent } from './component/my-com/my-com.component';
@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent {
  static componentName = "订单管理";
  name: string = 'my Name';
  myComponent = MyComComponent;
  constructor() {
  }
}
