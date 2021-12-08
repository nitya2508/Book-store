import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
BookList:any;

  constructor( private bookService: BookService) { }

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
