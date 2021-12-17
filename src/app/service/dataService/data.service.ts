import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  private searchData = new BehaviorSubject({ type:'',data:[]});
  searchNote = this.searchData.asObservable()
  changeData(message:any){
    this.searchData.next(message)
    // console.log("inside data service ===", message);
    
  }

  private getBook = new BehaviorSubject({data:[]});
  BookData = this.getBook.asObservable()
  changebookData(message:any){
    this.getBook.next(message)
    // console.log("inside data service ===", message);
    
  }

  private badge = new BehaviorSubject('default message');
  BadgeData = this.badge.asObservable()
  changeBadgeData(message:any){
    this.badge.next(message)
    // console.log("inside data service ===", message);
    
  }
}

