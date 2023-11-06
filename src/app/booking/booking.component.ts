import {Component, OnInit} from '@angular/core';
import {Car} from "../entitys/car/car";
import {DialogRef} from "../dialog-ref";
import {PhotoResponse} from "../dtos/photo-response/photo-response";
import {DateAdapter} from "@angular/material/core";
import {OrderService} from "../order-service/order.service";
import {CreateOrder} from "../dtos/create-order/create-order";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {DialogErrorService} from "../error-form/error-service/dialog-error.service";
import {ErrorFormComponent} from "../error-form/error-form/error-form.component";
import {ErrorResponse} from "../dtos/response/errorResponse";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  car!: Car;

  fullPrice: number | undefined;
  startDate: Date | undefined;
  finishDate: Date | undefined;

  errorMessage: string | undefined;
  successMessage = 'Order is created, follow its status in the Manage bookings section'

  constructor(private dialogRef: DialogRef,
              private dateAdapter: DateAdapter<Date>,
              private injectedCar: Car,
              private orderService: OrderService,
              private localStorage: LocalStorageService,
              private errorService: DialogErrorService) {
    this.car = this.injectedCar;
    this.fullPrice = this.car.price;
    console.log(this.car);
    this.startDate = this.dateAdapter.today();
    this.startDate.setDate(this.startDate.getDate() + 1)
    this.startDate.setHours(10);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);
    this.startDate.setMilliseconds(0);
    this.finishDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 1, 10, 0, 0, 0);
  }

  close() {
    this.dialogRef.close();
  }

  getBase64Image(photo: PhotoResponse) {
    if (photo.fileBytes) {
      return `data:image/jpg;base64,${photo.fileBytes}`;
    }
    return undefined;
  }

  getFullPrice(): number | string {
    let days = this.getDaysBetweenDates(this.startDate, this.finishDate);
    if (this.car.price && days !== 0) {
      this.fullPrice = this.car.price * days;
      return this.fullPrice;
    }
    return "mistake while getting the price";
  }

  getDaysBetweenDates(date1: Date | undefined, date2: Date | undefined): number {
    if (date1 && date2) {
      if (date1 > this.dateAdapter.today() && date1 > date2) {
        this.errorMessage = "The return date must be at least 1 day later than the rental start date."
      } else {
        this.errorMessage = "";
        const oneDay = 24 * 60 * 60 * 1000; // количество миллисекунд в одном дне
        const diffInTime = Math.abs(date2.getTime() - date1.getTime()); // разница в миллисекундах между датами
        const diffInDays = Math.round(diffInTime / oneDay); // разница в днях, округленная до целого числа
        return diffInDays;
      }
    }
    return 0;
  }

  clickApplyForTheCar() {
    let idUser = this.localStorage.get('idUser');
    this.startDate?.setHours(12);
    this.finishDate?.setHours(12);
    console.log(this.car.id);
    let order = new CreateOrder(this.startDate, this.finishDate, this.car.id);
    console.log(order);
    this.orderService.createOrder(idUser, order).subscribe((response) => {
        //TODO display success message
        if (response.status) this.catchError(response.status);
        this.close();
      },
      error => {
        this.close();
        this.catchError(error.status);
      }
    )
  }

  catchError(status: number) {
    switch (status) {
      case 403:
        this.errorMessage = "You need to sign in before booking the car";
        this.errorService.open(ErrorFormComponent, new ErrorResponse(this.errorMessage, status));
        break;
      case 452:
        this.errorMessage = "Order is not created. We have some server problems, wait please and try again";
        break;
      case 463:
        console.log(status);
        this.errorMessage = "Not all necessary data are filled, check idPassport,phone,drivingLicense,date of birth."
        this.errorService.open(ErrorFormComponent, new ErrorResponse(this.errorMessage, status));
        break;
      case 464:
        this.errorMessage = "This car for this date is already ordered by other user."
        break;
      default:
        this.errorMessage = "We have some server problems, wait please and try again."
    }
  }
}
