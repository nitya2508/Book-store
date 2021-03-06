import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  bookArray:any;
  id:any;
  
  arraylength:any;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this. getWishListItems();
    
  }

  getWishListItems(){

    this.bookService.getWishlistItemService().subscribe((response:any)=>{
      console.log("wishlist items====",response.result);
      this.bookArray=response.result;
      this.arraylength=this.bookArray.length;
    })
  }

  deleteitem(book:any){
    // console.log("book id",book.product_id._id);
    this.id=book?.product_id?._id;
    this.bookService.removeWishlistItenService(this.id).subscribe((response:any)=>{
      console.log("delete msg",response);

      for (let i = 0; i < this.bookArray.length; i++) {
        if (this.bookArray[i] == book) {
        this.bookArray.splice(i, 1);
        }
        }
      
    })
  }
}
