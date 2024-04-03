import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId! : string;
 userObj! : IUser;

  constructor(private route : ActivatedRoute, private userServ : UserService,
              private router : Router) { }

  ngOnInit(): void {
 
      this.route.params.subscribe(res => {
        // console.log(res);
        this.userId = res['userId'];
        console.log(this.userId);
        this.userObj = this.userServ.userObj(this.userId); 
      })
    
  }
  
 
}
