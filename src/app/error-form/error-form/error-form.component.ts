import { Component } from '@angular/core';
import {DialogRef} from "../../dialog-ref";
import {ErrorResponse} from "../../dtos/response/errorResponse";

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent {
  errorMessage: string|null;
  buttonName: string | null;
  link: any | null;

  constructor(private dialogRef: DialogRef,private injectedError: ErrorResponse) {
    this.errorMessage = injectedError.message;
    this.buttonName = "";
    this.link = "";
    this.generateMessageButtonLink(injectedError)
  }

  generateMessageButtonLink(response: ErrorResponse){
    this.errorMessage = response.message;
    switch (response.status){
      case 403: this.buttonName = "Sign in";
        this.link = ['auth_module/authenticate'];
        break;
      case 463:
        this.buttonName = "Fill necessary data";
        this.link = ['myAkk/extraData/change'];
        break;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
