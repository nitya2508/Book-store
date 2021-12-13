import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted=false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
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
      this.userService.loginService(data).subscribe((result:any) =>{
        console.log("login response",result);

        this.snackbar.open('Login Successful !', '', {
          duration:300,
        })

        localStorage.setItem("token",result.result.accessToken);
        this.route.navigateByUrl('/home/bookList')
      })
    }
  }

}
