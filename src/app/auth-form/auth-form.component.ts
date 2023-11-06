import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {LoginCredentials} from "../dtos/login-credentials/login-credentials";
import {AuthService} from "../auth-service/auth.service";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  providers: [AuthService]
})
@Injectable({
  providedIn: 'root'
})
export class AuthFormComponent implements OnDestroy, OnInit{
  loginCredentials: LoginCredentials;
  errorMessage: string | undefined;
  maskedPassword: string | undefined;

  constructor(
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {
    this.loginCredentials = new LoginCredentials();
  }


  public authenticate(loginCredentials: LoginCredentials) {
     this.authService.authenticate(loginCredentials).subscribe(
      jwtToken => {
        this.localStorage.set('bearerToken', jwtToken.valueOf());
        console.log(this.localStorage.get('bearerToken'));
        this.router.navigate(['']).then();
      },
      error => {
        this.catchError(error.status)
      }
    )
  }

  catchError(status: number) {
    if (status === 403) {
      this.errorMessage = "You have entered an incorrect login or password"
    } else this.errorMessage = "There are some server problems, wait please"
  }

  ngOnDestroy(): void {
    this.userService.getIdByLogin(this.loginCredentials.login).subscribe(
      id=>{
        this.localStorage.set('idUser',id.toString());
        console.log(id);
      })
  }

  ngOnInit(): void {
    localStorage.clear();
  }
}
