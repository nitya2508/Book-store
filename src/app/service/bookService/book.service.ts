import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl=environment.baseUrl;
  token:any;

  constructor(private http:HttpService) { 
    this.token= localStorage.getItem('token');
  }

  getAllbooksService(){

    let header = {
      Headers : new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.http.getService(this.baseurl+'get/book', false, header)
  }

  //   addtoCartService(productID:any){
  //   console.log("toktn", this.token);
    
  //   let headers = {
  //     Headers : new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'x-access-token': this.token,
  //     })
  //   }
  //   return this.http.postService(this.baseurl+ 'add_cart_item/' + productID , null, true, headers)
  // }

  addtoCartService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.postService(this.baseurl+'add_cart_item/' + productID, null, true, headers)
  }

  updateitemcount(id:any, payload:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.putService(this.baseurl+'cart_item_quantity/' + id, payload, true, headers)
  }
}
