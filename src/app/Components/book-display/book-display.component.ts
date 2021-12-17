import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService/data.service';
import { BookService } from 'src/app/service/bookService/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  subscription:any;
  message:any;
  book:any;
  orderCount = 1;
  AddtoBag =true;
  countHide =false;
  value:any;
  inputstar:any;
  star:any;
  comment:any;
  bookStoreArray:any;
  id:any;
  bookOrder=1;

  constructor(private dataService: DataService, private bookService: BookService, private snackbar: MatSnackBar,
    private route: Router) { }

  ngOnInit(): void {
    
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      // console.log("display card search data======", message.data[0]);
      this.book=message?.data[0]
      this.id =this.book?._id
        console.log("book======",this.book);
       console.log("book    id======",this.book?._id);
       console.log("book  this  id======",this.id);
       

      
  })
  this.getfeedBack()
}
addFeedback() {
  let data = {
    rating: this.value,
    comment: this.comment,
    product_id: this.id ,
  }

  this.bookService.addFeedbackService(data).subscribe((response: any) => {
    console.log("the response", response);
    this.getfeedBack()
    this.value="";
    this.comment="";
  })
}

addToCart(){
  console.log("book id",this.id );
  this.AddtoBag =false;
  this.countHide =true;

  this.bookService.addtoCartService(this.id ).subscribe((response:any) =>{
    console.log("add to cart item", response);
    console.log(this.orderCount);
    let Ddata={
      data:this.orderCount,
    }
    
    this.dataService.changebookData(Ddata);
    console.log("count",Ddata.data)
    this.snackbar.open('Item added to cart successfully !','',{
      duration: 200,
    })
  },error=>{
    console.log("Error")
  })
  
}

addToWishlist(){

  this.bookService.addtoWishListService(this.id ).subscribe((response:any) =>{
    console.log("add to cart item", response);
    
    this.snackbar.open('Item added to wishlist successfully !','',{
      duration: 200,
      
    })
    this.route.navigateByUrl('/home/wishlist')
  },error=>{
    console.log("Error")
  })
}

countincrease() {
  this.orderCount += 1
  this.updateCount()
}

countdecrease() {
  if (this.orderCount > 0) {
    this.orderCount -= 1;
    this.updateCount()
  }
  else {
    return;
  }
}

updateCount() {
  let payload = {
    "quantityToBuy": this.orderCount,
  }
  this.bookService.updateitemcount(this.id , payload).subscribe((response) => { 
    console.log(response);

    console.log(this.orderCount);
    let Ddata={
      data:this.orderCount,
    }
    
    this.dataService.changebookData(Ddata);
    console.log("count",Ddata.data)

  })
   
}

onClick(rating:number){
  console.log("rating", rating);
  
  
  // rating=rating;
}
getfeedBack() {
  let data = {
    product_id: this.id ,
  }
  this.bookService.getfeedBack(data).subscribe(
    (response: any) => {
      console.log("comment list ============",response.result);
      this.bookStoreArray = response.result;
})
}

}
