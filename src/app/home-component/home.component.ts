import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from "../localStorage-service/local-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isSignIn: boolean = false;
  myLogin: string | undefined;

  constructor(private localStorage:LocalStorageService) {
  }

  logout(): void{
    localStorage.clear();
    this.isSignIn =false;
    console.log("Log out");
  }


  ngOnInit(): void {
    if(localStorage.getItem('bearerToken')) {
      this.isSignIn = true;
      this.myLogin = this.localStorage.get("login");
    }
  }

}
