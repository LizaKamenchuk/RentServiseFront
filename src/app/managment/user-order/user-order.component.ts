import {Component, Input} from '@angular/core';
import {ShowOrder} from "../../dtos/show-order/show-order";
import {PhotoResponse} from "../../dtos/photo-response/photo-response";
import {Car} from "../../entitys/car/car";

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent {
  // @Input() order: ShowOrder =  new ShowOrder();

  getBase64Image(photo: PhotoResponse) {
    if (photo.fileBytes) {
      return `data:image/jpg;base64,${photo.fileBytes}`;
    }
    return undefined;
  };
}
