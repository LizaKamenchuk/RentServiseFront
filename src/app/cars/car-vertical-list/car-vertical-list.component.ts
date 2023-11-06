import {Component, OnInit} from '@angular/core';
import {CarService} from "../car-service/car.service";
import {CarResponse} from "../../dtos/car-response/car-response";
import {Car} from "../../entitys/car/car";

@Component({
  selector: 'app-car-vertical-list',
  templateUrl: './car-vertical-list.component.html',
  styleUrls: ['./car-vertical-list.component.css']
})
export class CarVerticalListComponent implements OnInit {
  cars: CarResponse[] = [];
  car: CarResponse|undefined;
  selectedClass: string = "";
  title: string = "";

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.title = "Special Upcoming Offers"
    this.carService.getAllCars().subscribe(response => {
      console.log(response)
      this.cars = response;
    });
  }

  handleClick(option: string){
    console.log(option);
    this.selectedClass = option;
    this.carService.getByCarClassType(this.selectedClass).subscribe( response=> {
      console.log(response)
      this.cars = response;
    });
  }


}
