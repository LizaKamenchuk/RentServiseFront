export class UserExtraData {
  name: string | undefined;
  lastname: string | undefined;
  drivingLicense: string | undefined;
  idPassport: string | undefined;
  phone: string | undefined;
  dateOfBirth: Date | undefined;

  constructor(name?: string, lastname?: string,drivingLicense?: string, idPassport?: string, phone?: string, dateOfBirth?: Date) {
    this.name= name;
    this.lastname = lastname;
    this.drivingLicense =drivingLicense;
    this.idPassport = idPassport;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
  }
}
