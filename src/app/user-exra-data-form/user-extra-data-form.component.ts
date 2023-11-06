import { Component } from '@angular/core';
import {UserExtraData} from "../dtos/userExtraData/user-extra-data";
import {UserService} from "../user-service/user.service";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-user-extra-data-form',
  templateUrl: './user-extra-data-form.component.html',
  styleUrls: ['./user-extra-data-form.component.css']
})
export class UserExtraDataFormComponent {
  extraData: UserExtraData;
  phoneNumberPattern = /^\+\d{12}$/;
  idPassportPattern = /^\d{7}[A-Z]\d{3}[A-Z]{2}\d$/;
  licensePatter = /^\d{9}$/;
  errorMessage: string | undefined;
  phoneMessage: string = "Phone number is required";
  passportMessage: string = "Identification number is required";
  licenseMessage: string = "Driving license id is required";


  constructor(private userService: UserService,
              private localStorage: LocalStorageService,
              private router: Router) {
    this.extraData = new UserExtraData();
  }

  saveExtraData(){
    this.userService.updateExtraData(this.localStorage.get('idUser'),this.extraData).subscribe(
      ()=>{
        this.router.navigate(['']).then()
      },
      error=>{
        this.catchErrors(error.status);
      }
    )
  }

  catchErrors(status: number) {
    if (status === 500) {
      this.errorMessage = 'Saving error,user with this identification id, phone number or driving license already exists';
    } else this.errorMessage = "There are some server problems, wait please";
  }

  checkPhoneNumber(){
    this.phoneMessage = "";
    if(!this.extraData.phone){
      this.phoneMessage = "Phone number is required";
      return;
    }
    if(!this.phoneNumberPattern.test(this.extraData.phone)){
      this.phoneMessage = "Phone number does not match the required form";
      return;
    }
  }
  checkPassportId(){
    this.passportMessage = "";
    if(!this.extraData.idPassport){
      this.passportMessage = "Identification number is required";
      return;
    }
    if(!this.idPassportPattern.test(this.extraData.idPassport)){
      this.passportMessage = "Identification number does not match the required form";
      return;
    }
  }

  checkDrivingLicense(){
    this.licenseMessage = "";
    if(!this.extraData.drivingLicense){
      this.licenseMessage = "Driving license id is required";
      return;
    }
    if(!this.licensePatter.test(this.extraData.drivingLicense)){
      this.licenseMessage = "Driving license id does not match the required form";
      return;
    }
  }
}
