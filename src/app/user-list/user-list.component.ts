import {Component, OnInit} from '@angular/core';
import {User} from "../entitys/user/user";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: User[]=[{ id: undefined, login: undefined, password: undefined,lastname: undefined,name: undefined }];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll()
      .subscribe(data => {
      this.users = data;
    });
  }
}
