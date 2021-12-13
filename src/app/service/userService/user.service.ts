import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl=environment.baseUrl;
  token:any;

  constructor(private http: HttpService) { 
    this.token= localStorage.getItem('token');
  }

  registrationService(reqData:any){
    console.log("user service", reqData);
    
    let header = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

   return this.http.postService(this.baseurl+'registration', reqData, false, header)
  }

  loginService(reqData:any){
     
    let header = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.postService(this.baseurl+'login', reqData, false, header)
  }
  
  updateaddress( payload:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.putService(this.baseurl+'edit_user', payload, true, headers)
  }
}
