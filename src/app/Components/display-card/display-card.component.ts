import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
@Input() BookArray:any
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  bookDetails(book:any){
    console.log("book details",book);

    this.route.navigateByUrl('/home/book')
  }
}
