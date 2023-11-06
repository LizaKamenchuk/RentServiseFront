import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarCardComponent} from "./car-card/car-card.component";
import {CarVerticalListComponent} from "./car-vertical-list/car-vertical-list.component";
import { CarsComponent } from './cars-main-component/cars.component';
import {CarService} from "./car-service/car.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpHeadersInterceptor} from "../interceptor/http-headers-interceptor";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RoutesModule} from "../routes/routes.module";
import {ModalService} from "../modal-service/modal.service";
import {BookingModule} from "../booking/booking.module";



@NgModule({
  declarations: [
    CarCardComponent,
    CarVerticalListComponent,
    CarsComponent,
  ],
  exports: [
    CarsComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    RoutesModule, HttpClientModule,
    CommonModule,
    BookingModule
  ],
  providers: [
    CarService,
    ModalService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ]
})
export class CarsModule { }
