import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersInfo! : Array<IUser>
  constructor(private userServ : UserService) { }

  ngOnInit(): void {
    this.usersInfo = this.userServ.fetchAllUsers()
  }

}
