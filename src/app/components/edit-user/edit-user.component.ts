import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/users.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  edituserId! : string;
  edituserObj! : IUser;
  edituserForm! : FormGroup;
  isInEditMode : boolean = false;

  constructor(private userserv : UserService, private route : ActivatedRoute,
              private router : Router, private uid : UuidService) { }

  ngOnInit(): void {
    this.createForm()
    // console.log(this.route.snapshot.params['userId'])
    
    //   this.edituserId = this.route.snapshot.params['userId'];
    // this.edituserObj= this.userserv.userObj(this.edituserId);
    // console.log(this.edituserObj);
    this.route.params.subscribe(res => {
      this.edituserId = res['userId'];
      this.edituserObj= this.userserv.userObj(this.edituserId)
    })
    this.edituserForm.patchValue(this.edituserObj)
    // this.edituserForm.controls['userRole'].patchValue(this.edituserObj.userRole)
    if(this.edituserId){
      this.isInEditMode = true;
    this.route.queryParams.subscribe(res => {
      console.log(res);
      if(res['canEditUserRole']=='user'){
        this.edituserForm.disable()
      }
      else{
        this.edituserForm.enable()
      }
    })
    }
    else{
      this.isInEditMode = false;
    }
  }

  createForm(){
    this.edituserForm = new FormGroup({
      userName : new FormControl(null),
      userId : new FormControl(null),
      userImg : new FormControl(null),
      userRole : new FormControl(null)
    })
  }
  updateUser(){
    let updatedObj = {...this.edituserForm.value};
    this.userserv.updateUser(updatedObj);
    this.router.navigate(['/users'])
  }

  onAddUser(){
    let newUser = {...this.edituserForm.value, userId : this.uid.uuid()};
    this.userserv.addNewUser(newUser);
    this.router.navigate(['/users'])
  }
}
