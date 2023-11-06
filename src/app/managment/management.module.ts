import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UserOrderComponent } from './user-order/user-order.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CarService} from "../cars/car-service/car.service";
import {ModalService} from "../modal-service/modal.service";
import {HttpHeadersInterceptor} from "../interceptor/http-headers-interceptor";
import {OrderService} from "../order-service/order.service";



@NgModule({
  declarations: [
    MyOrdersComponent,
    UserOrderComponent,
  ],
  imports: [
    CommonModule,BrowserModule,
    FormsModule,HttpClientModule,
  ],
  providers: [
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ]
})
export class ManagementModule { }
