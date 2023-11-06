import {Component, OnInit} from '@angular/core';
import {UserExtraData} from "../dtos/userExtraData/user-extra-data";
import {UserService} from "../user-service/user.service";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-akk',
  templateUrl: './my-akk.component.html',
  styleUrls: ['./my-akk.component.css']
})
export class MyAkkComponent implements OnInit {
  idUser: number;
  extraData: UserExtraData;
  phoneNumberPattern = /^\+\d{12}$/;
  idPassportPattern = /^\d{7}[A-Z]\d{3}[A-Z]{2}\d$/;
  licensePatter = /^\d{9}$/;
  errorMessage: string | undefined;
  phoneMessage: string | undefined;
  passportMessage: string | undefined;
  licenseMessage: string | undefined;
  nameMessage: string | undefined;
  lastnameMessage: string | undefined;


  constructor(private userService: UserService,
              private localStorage: LocalStorageService,
              private router: Router) {
    this.idUser = this.localStorage.get('idUser');
    this.extraData = new UserExtraData();
  }

  ngOnInit(): void {
    this.userService.getAllDataById(this.idUser).subscribe(response => {
      this.extraData = response;
    })
  }

  changeExtraData() {
    this.extraData.dateOfBirth?.setHours(12);
    console.log(this.extraData);
    this.userService.updateExtraData(this.idUser, this.extraData).subscribe(
      () => {
        console.log("update");
      },
      error => {
        this.catchErrors(error.status);
      }
    )
  }

  catchErrors(status: number) {
    console.log(status)
    if (status === 500) {
      this.errorMessage = 'Saving error,user with this identification id, phone number or driving license already exists';
    } else this.errorMessage = "There are some server problems, wait please";
  }


  checkName(){
    this.nameMessage = "";
    if (!this.extraData.name) {
      this.nameMessage = "Stay the field empty and it does not change";
      return;
    }
    if(this.extraData.name.length<2){
      this.nameMessage = "Name must contain at least 2 letters";
      return;
    }
  }

  checkLastname(){
    this.lastnameMessage = "";
    if (!this.extraData.lastname) {
      this.lastnameMessage = "Stay the field empty and it does not change";
      return;
    }
    if(this.extraData.lastname.length<2){
      this.lastnameMessage = "Lastname must contain at least 2 letters";
      return;
    }
  }

  checkPhoneNumber() {
    this.phoneMessage = "";
    if (!this.extraData.phone) {
      this.phoneMessage = "Stay the field empty and it does not change";
      return;
    }
    if (!this.phoneNumberPattern.test(this.extraData.phone)) {
      this.phoneMessage = "Phone number does not match the required form";
      return;
    }
  }

  checkPassportId() {
    this.passportMessage = "";
    if (!this.extraData.idPassport) {
      this.passportMessage = "Stay the field empty and it does not change";
      return;
    }
    if (!this.idPassportPattern.test(this.extraData.idPassport)) {
      this.passportMessage = "Identification number does not match the required form";
      return;
    }
  }

  checkDrivingLicense() {
    this.licenseMessage = "";
    if (!this.extraData.drivingLicense) {
      this.licenseMessage = "Stay the field empty and it does not change";
      return;
    }
    if (!this.licensePatter.test(this.extraData.drivingLicense)) {
      this.licenseMessage = "Driving license id does not match the required form";
      return;
    }
  }

}
