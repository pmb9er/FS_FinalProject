import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
// imorpt user model

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAll()
  }
  
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  getAll()
 {
   this.userService.getAll()
   .then((res: User[]) => (this.users = res))
    .catch(err => console.log(err))
 }}
