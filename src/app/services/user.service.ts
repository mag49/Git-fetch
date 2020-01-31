import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  public username:string;
  public clientid="4be7d8c470e0705ea05e";
  public clientsecret="5159990471a4111c3a2a6400e86e7f18533eb46f";

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'mag49';
  }
 getUserData(){ 
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret);
  }
  getUserRepos(){ 
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret);
  }


updateUser(username: string){
  this.username = username;
}

}

