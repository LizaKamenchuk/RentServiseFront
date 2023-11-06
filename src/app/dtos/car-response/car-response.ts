import {PhotoResponse} from "../photo-response/photo-response";

export class CarResponse {
  id: number | undefined;
  model: string | undefined;
  mark: string | undefined;
  price: number | undefined;
  photos: PhotoResponse[] | undefined;


  constructor(id?: number, model?: string, mark?:string, price?: number,photos?: PhotoResponse[]) {
    this.id = id;
    this.model = model;
    this.mark = mark;
    this.price = price;
    this.photos = photos;
  }

}
