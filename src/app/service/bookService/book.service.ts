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
  // this.token= localStorage.getItem('token');
  //   let headers = {
  //     Headers : new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'x-access-token': this.token,
  //     })
  //   }
  //   return this.http.postService(this.baseurl+ 'add_cart_item/' + productID , {}, true, headers)
  // }

  addtoCartService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.postService(this.baseurl+'add_cart_item/' + productID, {}, true, headers)
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

  getCartItemService(){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.getService(this.baseurl+'get_cart_items', true, headers)
  }

  addtoWishListService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.postService(this.baseurl+'add_wish_list/' + productID, {}, true, headers)
  }

  getWishlistItemService(){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.getService(this.baseurl+'get_wishlist_items', true, headers)
  }

  removeWishlistItenService(productID:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.deleteService(this.baseurl+'remove_wishlist_item/'+ productID, true, headers)
  
  }


  removeCartItenService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.http.deleteService(this.baseurl+'remove_cart_item/' + productID, true, headers)
  }

  addOrder(payload: any) {
    console.log("payload", payload);
    
    let headers = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'content-Type': 'application/json'
      })
    }
    return this.http.postService(this.baseurl+"add/order", payload, true, headers);
  }


  // addOrder(data: any) {
  //   console.log("inside book serviece");
    
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'x-access-token': this.token,
  //     })
  //   }
  //   return this.http.postService(this.baseurl+'add/order' , data, true, headers)
  // }

  addFeedbackService(data: any) {

    // this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log('data', data.product_id);
    
    return this.http.postService(this.baseurl+`add/feedback/${data.product_id}`, data, true, options)
  }

  getfeedBack(data: any) {
    this.token = localStorage.getItem('token')

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions);

    return this.http.getService(this.baseurl+`get/feedback/${data.product_id}`, true, httpAuthOptions);

  }

  
}
