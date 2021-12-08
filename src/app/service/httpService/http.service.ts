import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  postService(url:any, data:any, token:boolean=false, httpOptions:any){
    console.log("inside http", data);
    
  return  this.httpClient.post(url,data , token && httpOptions );
  }

  getService(url:any, token:boolean=false, httpOptions:any){

    return this,this.httpClient.get(url,token && httpOptions)

  }

  updateService(){

  }

  deleteService(){

  }
}
