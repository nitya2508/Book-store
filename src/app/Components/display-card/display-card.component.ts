import { Component, Input,OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';
import { BookService } from 'src/app/service/bookService/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
@Input() BookArray:any
book:any;
inCart:boolean=false;
totalLength:any;
page:number=1;
orderCount=0;

 

  constructor( private route:Router, private dataService: DataService, private bookService: BookService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.totalLength=this.BookArray?.length;
    // this.changeDetectorRef.detectChanges();
    // this.BookArray.paginator = this.paginator;
    // this.obs = this.BookArray.connect();
  }

 
  bookDetails(books:any){
    console.log("book details",books);
    this.book=books;

    this.route.navigateByUrl('/home/book');
    let Ddata={
      type:'search',
      data:[this.book]
    }
    this.dataService.changeData(Ddata)
  }

  addtocart(books:any){
    console.log(" booklist book id",books?._id);
    // this.AddtoBag =false;
    // this.countHide =true;
  
    this.bookService.addtoCartService(books?._id).subscribe((response:any) =>{
      console.log("add to cart item", response);
      this.orderCount +=1;
      let Ddata={
        data:this.orderCount,
      }
      
      this.dataService.changebookData(Ddata);
      
      this.snackbar.open('Item added to cart Successfully !', '',{
        duration: 200,
      })
    })
    
  }

  addToWishlist(books:any){

    this.bookService.addtoWishListService(books?._id).subscribe((response:any) =>{
      console.log("add to cart item", response);
      
      this.snackbar.open('Item added to wishlist successfully !','',{
        duration: 200,
      })
      this.route.navigateByUrl('/home/wishlist')
    },error=>{
      console.log("Error")
    })
  }
  
}
