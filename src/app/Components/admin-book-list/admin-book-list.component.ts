import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.scss']
})
export class AdminBookListComponent implements OnInit {

  constructor(private bookService:BookService) { }
  BookList:any;

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(){

    this.bookService.getAllbooksService().subscribe((response:any) =>{
      console.log("Book List", response.result);
      this.BookList=response.result;
    })
  }

}
