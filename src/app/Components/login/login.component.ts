import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/service/dataService/data.service';
import { AdminService } from 'src/app/service/adminService/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted=false;
  subscription:any;
  inpValue:any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private dataService:DataService,
    private route:Router, private snackbar:MatSnackBar, private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.BadgeData.subscribe(message =>{
      this.inpValue = message;
     console.log("inside login===",this.inpValue);
     
     })

    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      let data = {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
      }
      if(this.inpValue=== "user"){
        console.log("inside user",this.inpValue);

        this.userService.loginService(data).subscribe((result:any) =>{
        console.log("login response",result);

        this.snackbar.open('User Login Successful !', '', {
          duration:300,
        })

        localStorage.setItem("token",result.result.accessToken);
        this.route.navigateByUrl('/home/bookList')
      })
      }else  if(this.inpValue=== "admin"){
        console.log("inside admin",this.inpValue);

        this.adminService.loginService(data).subscribe((result:any) =>{
        console.log("login response",result);

        this.snackbar.open('Admin Login Successful !', '', {
          duration:300,
        })

        localStorage.setItem("token",result.result.accessToken);
        this.route.navigateByUrl('/home/adminbookList')
      })
      }
      // this.userService.loginService(data).subscribe((result:any) =>{
      //   console.log("login response",result);

      //   this.snackbar.open('Login Successful !', '', {
      //     duration:300,
      //   })

      //   localStorage.setItem("token",result.result.accessToken);
      //   this.route.navigateByUrl('/home/bookList')
      // })
    }
  }

}
