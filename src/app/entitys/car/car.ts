import {PhotoResponse} from "../../dtos/photo-response/photo-response";

export class Car {
  id: number | undefined;
  model: string | undefined;
  mark: string | undefined;
  price: number| undefined;
  manufacture_year: number | undefined;
  fuel_consumption: number | undefined;
  limitations: string | undefined;
  transmissionType: string | undefined;
  fuelType: string | undefined;
  class_type: string | undefined;
  photos: PhotoResponse[] | undefined;


  constructor(id?: number, model?: string, mark?: string, manufacture_year?: number,
              fuel_consumption?: number, limitations?: string, transmission?: string,
              fuel_type?: string, class_type?: string, price?: number) {
    this.id = id;
    this.model = model;
    this.mark = mark;
    this.price = price;
    this.manufacture_year = manufacture_year;
    this.fuel_consumption = fuel_consumption;
    this.limitations = limitations;
    this.transmissionType = transmission;
    this.fuelType = fuel_type;
    this.class_type = class_type;
  }

}
