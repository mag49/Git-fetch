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

  constructor(private UserService: UserService) { 
    this.UserService.getUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.UserService.getUserData().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
}

  findUser(){
    this.UserService.updateUser(this.username);

    this.UserService.getUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.UserService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
  }
  
  ngOnInit() {
  }

}
