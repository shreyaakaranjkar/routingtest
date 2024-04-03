import { Injectable } from "@angular/core";
import { IUser } from "../interface/user";

@Injectable({
    providedIn:'root'
})
export class UserService{

    usersArray : Array<IUser> = [
        {
            userName : 'John Doe',
            userId : '101',
            userRole : 'user',
            userImg : 'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180'
        },
        {
            userName : 'Jane Doe',
            userId : '102',
            userRole : 'admin',
            userImg : 'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180'
        },
        {
            userName : 'Jenny Doe',
            userId : '103',
            userRole : 'user',
            userImg : 'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180'
        }
    ]

    fetchAllUsers(){
        return this.usersArray;
    }

    userObj(id : string):IUser{
        return this.usersArray.find(user => user.userId === id) as IUser
    }

    addNewUser(userObj : IUser){
        this.usersArray.push(userObj)
    }

    updateUser(updtaeduserobj : IUser){
        let getIndex = this.usersArray.findIndex(user => user.userId === updtaeduserobj.userId);
        this.usersArray[getIndex]= updtaeduserobj
    }
}