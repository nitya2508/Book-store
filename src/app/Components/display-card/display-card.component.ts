import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
@Input() BookArray:any
book:any;
  constructor( private route:Router, private dataService: DataService, private bookService: BookService) { }

  ngOnInit(): void {
  }

  bookDetails(books:any){
    // console.log("book details",books);
    this.book=books;

    this.route.navigateByUrl('/home/book');
    let Ddata={
      type:'search',
      data:[this.book]
    }
    this.dataService.changeData(Ddata)
  }

  addtocart(books:any){
    console.log(" booklist book id",books._id);
    // this.AddtoBag =false;
    // this.countHide =true;
  
    this.bookService.addtoCartService(books._id).subscribe((response:any) =>{
      console.log("add to cart item", response);
      
    })
    
  }
}
