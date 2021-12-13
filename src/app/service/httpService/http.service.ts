import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  postService(url:any, data:any=null, token:boolean=false, httpOptions:any){
    console.log("inside http", token);
    
  return  this.httpClient.post(url, data , token && httpOptions );
  }

  getService(url:any, token:boolean=false, httpOptions:any){

    return this.httpClient.get(url,token && httpOptions)

  }

  putService(url:any, data:any=null, token:boolean=false, httpOptions:any){

    return  this.httpClient.put(url, data , token && httpOptions );
  }

  deleteService(url:any, token:boolean=false, httpOptions:any){

    return  this.httpClient.delete(url, token && httpOptions );
  }
}
