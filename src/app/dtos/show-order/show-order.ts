import {Car} from "../../entitys/car/car";

export class ShowOrder {
  startDate: Date | undefined;
  finishDate: Date | undefined;
  // car: Car | null;
  price: number|undefined;
  refuseReason: string | undefined;
  status: string | undefined;

  constructor(startDate?: Date, finishDate?: Date, price?: number, refuseReason?: string, status?: string) {
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.refuseReason = refuseReason;
    this.status = status;
  }
}
