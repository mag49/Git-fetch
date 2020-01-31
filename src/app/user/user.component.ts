import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  profile:any;
  repos:any;
  username:string;

  constructor(private profileService: UserService) { 
    this.profileService.fetchUserData().subscribe(profile => {
      console.log(profile);
      this.profile=profile;
    }); 

    this.profileService.fetchUserData().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
}

  findUser(){
    this.profileService.updateUser(this.username);

    this.profileService.fetchUserData().subscribe(user => {
      console.log(profile);
      this.profile=profile;
    }); 

    this.profileService.fetchUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    }) 
  }
  
  ngOnInit() {
  }

}
