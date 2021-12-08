import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
@Input() BookArray:any
  constructor() { }

  ngOnInit(): void {
  }

  bookDetails(book:any){
    console.log("book details",book);
    
  }
}
