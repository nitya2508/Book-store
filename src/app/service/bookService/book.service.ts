import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl=environment.baseUrl

  constructor(private http:HttpService) { }

  getAllbooksService(){

    let header = {
      Headers : new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.http.getService(this.baseurl+'get/book', false, header)
  }
}
