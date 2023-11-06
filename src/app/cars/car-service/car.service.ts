import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarResponse} from "../../dtos/car-response/car-response";
import {Car} from "../../entitys/car/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private getAllCarsUrl = "http://localhost:8085/car/getAll"
  private getByCarClassTypeUrl = "http://localhost:8085/car/getByCarClass"
  private getByIdUrl = "http://localhost:8085/car/getFullInfo"

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<CarResponse[]>{
    return this.http.get<CarResponse[]>(this.getAllCarsUrl);
  }

  getByCarClassType(carClassType: string): Observable<CarResponse[]>{
    return this.http.get<CarResponse[]>(this.getByCarClassTypeUrl+"/"+carClassType);
  }

  getById(id: number): Observable<Car>{
    return this.http.get<Car>(this.getByIdUrl+"/"+id);
  }
}
