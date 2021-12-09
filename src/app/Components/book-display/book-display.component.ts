import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService/data.service';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  subscription:any;
  message:any;
  book:any;
  orderCount = 0;
  AddtoBag =true;
  countHide =false;

  inputstar:any;
  star:any;

  constructor(private dataService: DataService, private bookService: BookService) { }

  ngOnInit(): void {
   
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      // console.log("display card search data======", message.data[0]);
      this.book=message.data[0]
      //  console.log("book",this.book);
      
  })
}
addToCart(){
  console.log("book id",this.book._id);
  this.AddtoBag =false;
  this.countHide =true;

  this.bookService.addtoCartService(this.book._id).subscribe((response:any) =>{
    console.log("add to cart item", response);
    
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
  this.bookService.updateitemcount(this.book._id, payload).subscribe((response) => { 
    console.log(response);
  })
   
}

onClick(rating:number){
  console.log("rating", rating);
  
  
  // rating=rating;
}

}
