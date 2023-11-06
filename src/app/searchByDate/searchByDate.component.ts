import {Component, Injectable} from '@angular/core';
import {DateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-date-picker',
  templateUrl: './searchByDate.component.html',
  styleUrls: ['./searchByDate.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SearchByDateComponent {
  startDate: Date|undefined;
  finishDate: Date|undefined;


  constructor( private dateAdapter: DateAdapter<Date>) {
    this.startDate = this.dateAdapter.today();
    this.finishDate = new Date(this.startDate.getFullYear(),this.startDate.getMonth(),this.startDate.getUTCDay().valueOf()+1);
  }

  openDatePicker(){

  }
}
