import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderCount:any;
  bookArray:any;

  constructor(private bookService: BookService, private route:Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems(){
    this.bookService.getCartItemService().subscribe((response:any) => {
      console.log("cart items ====",response.result);
      console.log("cart items ====",response.result[0]);
      this.bookArray=response.result;

      
    })
  }

  placeorder(){
    // console.log("book========",book.user_id);
    
    // console.log("book and index========",book.product_id.bookName, i);
    // let Ddata={
      
    //   data:[i,book]
    // }
    this.dataService.changebookData( this.bookArray)
    this.route.navigateByUrl('/home/bookDetails')
  }

  countincrease() {
    this.orderCount += 1
    // this.updateCount()
  }
  
  countdecrease() {
    if (this.orderCount > 0) {
      this.orderCount -= 1;
      // this.updateCount()
    }
    else {
      return;
    }
  }

  deleteCartitem(book:any){
    console.log("delete cart book id",book);
    this.bookService.removeCartItenService(book._id).subscribe((response:any)=>{
      console.log("delete msg",response);

      for (let i = 0; i < this.bookArray.length; i++) {
        if (this.bookArray[i] == book) {
        this.bookArray.splice(i, 1);
        }
        }
      
    })
  }
}
