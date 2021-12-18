import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
isSignup: boolean =false;
inputValue: any;
user:any;
admin:any;
  constructor(private router:Router, private dataService: DataService) { }

  ngOnInit(): void {
    
  }
  onItemChange($event:any){
    console.log($event);
    console.log("input",this.inputValue);
    this.dataService.changeBadgeData(this.inputValue)
    
  }
  
  

  signup(){
    this.isSignup=true;
    this.router.navigateByUrl('signup/Sign-up')
  }
  login(){
    this.isSignup=false;
    this.router.navigateByUrl('signup/login')
  }

}
