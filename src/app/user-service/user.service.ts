import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../entitys/user/user";
import {Observable} from "rxjs";
import {CreateUser} from "../dtos/create-user/create-user";
import {UserExtraData} from "../dtos/userExtraData/user-extra-data";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUserUrl = 'http://localhost:8085/rent_module/user_controller'
  private getAllUrl = 'http://localhost:8085/rent_module/user/admin/all';
  private saveUrl = this.baseUserUrl+'/create';
  private getIdByLoginUrl = this.baseUserUrl+'/admin_user/getId'
  private updateExtraDataUrl = 'http://localhost:8085/extraData/user/updateExtra';
  private getInfoById = 'http://localhost:8085/extraData/user/get'


  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUrl);
  }

  public save(user: CreateUser) {
    return this.http.post<CreateUser>(this.saveUrl, user);
  }

  public getIdByLogin(login: string | undefined){
    return this.http.get(this.getIdByLoginUrl+"?login="+login);
  }

  public updateExtraData(idUser: number, extraData: UserExtraData){
    console.log("userService: ed")
    return this.http.post(this.updateExtraDataUrl+"?idUser="+idUser,  extraData);
  }

  public getAllDataById(idUser: number): Observable<UserExtraData>{
    return this.http.get<UserExtraData>(this.getInfoById+"/"+idUser);
  }
}
