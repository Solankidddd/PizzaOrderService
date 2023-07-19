import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public userDetails?: User;
  base_url:string="http://localhost:8083/api/v1";
  isLoggedIn:boolean=false;

  constructor(private httpclient:HttpClient) { }

  storeData(data2:any){
    return this.httpclient.post("http://localhost:8083/api/authservice/register",data2);

  }
  authentication(data1:any){
  

    return this.httpclient.post("http://localhost:8083/api/authservice/login",data1);
  }
  loggedIn() {
    this.isLoggedIn = true;
  }
}
