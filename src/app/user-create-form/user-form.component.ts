import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user-service/user.service";
import {CreateUser} from "../dtos/create-user/create-user";
import {AuthService} from "../auth-service/auth.service";
import {LoginCredentials} from "../dtos/login-credentials/login-credentials";
import {LocalStorageService} from "../localStorage-service/local-storage.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: CreateUser;
  confirmPasswordMessage: string | undefined;
  errorMessage: string | undefined;
  passwordMessage: string = "Password is required";


  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private localStorage: LocalStorageService) {
    this.user = new CreateUser();
  }


  checkPassword() {
    this.passwordMessage = "";
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if (!this.user.password) {
      this.passwordMessage = "Password is required";
      return;
    }
    if (this.user.password?.length < 8) {
      this.passwordMessage = "Password must be at least 8 symbols";
      return;
    }
    if (!passwordPattern.test(this.user.password)) {
      this.passwordMessage = "Password must contain at least one lowercase and uppercase Latin letter and number";
    }
  }


  onSubmit() {
    if (!this.user.confirmPassword) {
      this.confirmPasswordMessage = "Confirm password is required"
      return;
    }
    console.log(this.user.password);
    console.log(this.user.confirmPassword);
    if (this.user.password !== this.user.confirmPassword) {
      this.confirmPasswordMessage = 'Passwords do not match';
      return;
    }
    this.userService.save(this.user)
      .subscribe(
      result => {
        this.initAuthToken();
        this.router.navigate(['/rent_module/extraData/add']).then();
      },
      error => {
        this.catchErrors(error.status)
      });
  }


  gotoUserList() {
    // this.router.navigate(['/rent_module/user/create']).then();
  }

  catchErrors(status: number) {
    if (status === 500) {
      this.errorMessage = 'Creation error,user with this login already exists';
    } else this.errorMessage = "There are some server problems, wait please";
  }

  initAuthToken(): void {
    this.authService.authenticate(new LoginCredentials(this.user.login, this.user.password))
      .subscribe(
      jwtToken => {
        this.localStorage.set('bearerToken', jwtToken.valueOf());
        console.log(this.localStorage.get('bearerToken'));
        this.initAuthId();
      }
    )
  }

  initAuthId(): void {
    console.log(this.localStorage.get('bearerToken'));
    this.userService.getIdByLogin(this.user.login).subscribe(
      id=>{
        console.log(id);
        this.localStorage.set('idUser',<number>id);
        console.log(this.localStorage.get('idUser'));
      })
  }

}
