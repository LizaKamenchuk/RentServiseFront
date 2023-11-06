import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginCredentials} from "../dtos/login-credentials/login-credentials";
import {Observable, Subject, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {RoutesModule} from "../routes/routes.module";
import {LocalStorageService} from "../localStorage-service/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private authenticateUrl = 'http://localhost:8085/auth_module/authenticate';


  constructor(private http: HttpClient, private router: Router,private localStorage: LocalStorageService,) {
  }

  public authenticate(loginCredentials: LoginCredentials) {
    return this.http.post<string>(this.authenticateUrl, loginCredentials);
  }


}
