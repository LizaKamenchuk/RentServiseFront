import {Component} from '@angular/core';
import {OrderService} from "../../order-service/order.service";
import {ShowOrder} from "../../dtos/show-order/show-order";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  // myOrders: ShowOrder[] | null;

  constructor(private orderService: OrderService) {
    // this.myOrders = null;
    // this.orderService.getOrdersForUser().subscribe(response =>
    //   this.myOrders = response);
  }

}
