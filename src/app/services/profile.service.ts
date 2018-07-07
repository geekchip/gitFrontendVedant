import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import 'rxjs/Rx';
import { map } from "rxjs/operators";
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username : string;
  private clientid = '568b91befc09d7f432d3';
  private clientsecret = '4c35f8bf5f1342eb6b67cdd29c999418320a93be';

  constructor(private http:Http) {
    console.log("Service is ready!");
    this.username = 'supreetsingh247';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +
    this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map((response: any) => response.json()));
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +
    this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map((response: any) => response.json()));

   }

   updateProfile(username:string){
     this.username = username

   }
}
