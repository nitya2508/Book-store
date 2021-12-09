import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted=false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route:Router) { }

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
        console.log("login response",result.result);
        localStorage.setItem("token",result.result.accessToken);
        this.route.navigateByUrl('/home')
      })
    }
  }

}
