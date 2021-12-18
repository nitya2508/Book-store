import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
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

   return this.http.postService(this.baseurl+'admin/registration', reqData, false, header)
  }

  loginService(reqData:any){
     
    let header = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.postService(this.baseurl+'admin/login', reqData, false, header)
  }
}
