import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  repos:any;
  username:string;

  constructor(private userService: UserService) { 
    this.userService.fetchUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.userService.fetchUserData().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
}

  findUser(){
    this.userService.updateUser(this.username);

    this.userService.fetchUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.userService.fetchUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
  }
  
  ngOnInit() {
  }

}
