import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {BookingComponent} from "./booking.component";
import {FormsModule} from "@angular/forms";
import {OrderService} from "../order-service/order.service";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import { PopupComponent } from '../popup/popup.component';



@NgModule({
  declarations: [
    BookingComponent,
    PopupComponent,
  ],
  exports:[
    BookingComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers:[
    OrderService,
    LocalStorageService
  ]
})
export class BookingModule { }
