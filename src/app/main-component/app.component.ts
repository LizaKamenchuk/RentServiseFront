import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from "../localStorage-service/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit{
  title: string;

  constructor(private localStorage: LocalStorageService) {
    this.title = 'CarService';
  }

  ngOnInit(): void {
    console.log("clear Local Storage")
    this.localStorage.clear();
  }

}
