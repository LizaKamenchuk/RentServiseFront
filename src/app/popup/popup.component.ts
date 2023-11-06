import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  popupMessage(message: string){
    Swal.fire({
      title: 'Message',
      text: message,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
      }
    );
  }

}
