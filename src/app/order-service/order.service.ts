import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateOrder} from "../dtos/create-order/create-order";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {RequestResponse} from "../dtos/request-response/request-response";
import {Observable} from "rxjs";
import {ShowOrder} from "../dtos/show-order/show-order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseOrderUrl = "http://localhost:8085/order";
  createOrderUrl = this.baseOrderUrl+"/user/create";
  getOrdersByUserId = this.baseOrderUrl + "user/get/"


  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  createOrder(idUser: number, orderCreate: CreateOrder): Observable<RequestResponse<CreateOrder>>{
    return this.http.post<RequestResponse<CreateOrder>>(this.createOrderUrl + "?idUser="+idUser,orderCreate)
  }

  getOrdersForUser() :Observable<ShowOrder[]>{
    return this.http.get<ShowOrder[]>(this.getOrdersByUserId+ this.localStorage.get("idUser"));
  }
}
