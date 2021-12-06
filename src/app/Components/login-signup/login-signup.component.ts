import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
isSignup: boolean =true;

  constructor(private router:Router) { }

  ngOnInit(): void {
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
