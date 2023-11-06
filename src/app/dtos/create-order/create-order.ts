export class CreateOrder {
  startDate: Date | undefined;
  finishDate: Date | undefined;
  idCar: number | undefined;

  constructor(startDate?: Date, finishDate?: Date, idCar?: number){
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.idCar = idCar;
  }

}
