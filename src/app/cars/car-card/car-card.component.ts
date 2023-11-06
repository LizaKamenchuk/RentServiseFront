import {Component, Input} from '@angular/core';
import {CarResponse} from "../../dtos/car-response/car-response";
import {PhotoResponse} from "../../dtos/photo-response/photo-response";
import {CarService} from "../car-service/car.service";
import {ModalService} from "../../modal-service/modal.service";
import {BookingComponent} from "../../booking/booking.component";
import {Car} from "../../entitys/car/car";
import {map, Observable, of} from "rxjs";


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car: CarResponse = {
    id: undefined,
    price: undefined,
    photos: undefined,
    mark: undefined,
    model: undefined
  };
  bookingCar: Car;


  constructor(private carService: CarService, private modalService: ModalService) {
    this.bookingCar = {
      id: this.car.id,
      mark: this.car.mark,
      model: this.car.model,
      manufacture_year: undefined,
      photos: this.car.photos,
      price: undefined,
      fuelType: undefined,
      transmissionType: undefined,
      class_type: undefined,
      limitations: undefined,
      fuel_consumption: undefined
    }
  }

  getBase64Image(photo: PhotoResponse) {
    if (photo.fileBytes) {
      return `data:image/jpg;base64,${photo.fileBytes}`;
    }
    return undefined;
  }

  getBookingCar(): Promise<Car> {
    return new Promise((resolve, reject) => {
      if (this.car.id) {
        this.carService.getById(this.car.id).pipe(
          map(response => {
            const booking = response;
            booking.photos = this.car.photos;
            booking.id = this.car.id;
            console.log(booking);
            return booking;
          }))
          .subscribe(
            booking => {
              this.bookingCar = booking;
              resolve(this.bookingCar);
            },
            error => {
              reject(error);
            }
          );
      } else {
        resolve(this.bookingCar);
      }
    });
  }


  openBookNow() {
    this.getBookingCar().then( bookingCar=> {
        const dialogRef = this.modalService.open(BookingComponent, bookingCar);
        dialogRef.afterClosed().subscribe(() => console.log('Closed'));
      }
    )
  }

}
