import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user:any;
  repos:any;
  username:string;
  uname = "Mag49";

  constructor(private userService: UserService) { 
    this.userService.getUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.userService.getUserData().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
}

  findUser(){
    this.userService.updateUser(this.username);

    this.userService.getUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.userService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
  }
  
  ngOnInit() {
    this.userService.updateUser(this.uname);

    this.userService.getUserData().subscribe(user => {
      console.log(user);
      this.user=user;
    }); 

    this.userService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 

  }

}
