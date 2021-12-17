import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscription:any;
  message:any;
  count:any;
  hidden=false;
  retmsg:any

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
    console.log("hello");
    this.count=0;
    this.subscription = this.data.BookData.subscribe(message => {
      this.message = message;
      this.hidden=false;
    this.count=message.data;
    console.log("count", this.message.data);
  })

  this.subscription=this.data.BadgeData.subscribe(msg=>{
    this.retmsg=msg;
    // this.count=0;
    this.hidden=this.retmsg;
    console.log("msg", this.retmsg);
  
  })
    
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signup/login')
  }
}
