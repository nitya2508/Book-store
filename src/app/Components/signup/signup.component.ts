import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from 'src/app/service/dataService/data.service';
import { AdminService } from 'src/app/service/adminService/admin.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  SignupForm!:FormGroup;
  submitted:boolean=false;
  subscription:any;
  inpValue:any;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
     private snackbar:MatSnackBar, private dataService:DataService, private adminService:AdminService) { }

  ngOnInit(){

    this.subscription = this.dataService.BadgeData.subscribe(message =>{
       this.inpValue = message;
      console.log("inside signup===",this.inpValue);
      
      })


    this.SignupForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile:['', [Validators.required]],
      service: "advance"
    })
  }

  onSubmit(){
    this.submitted=true;
    console.log("inside on submit");

    if(this.SignupForm.valid){

      let reqData = {
        fullName :this.SignupForm.value.firstName,
        email: this.SignupForm.value.email,
        password: this.SignupForm.value.password,
        phone: this.SignupForm.value.mobile,
        service:this.SignupForm.value.service,
      }

        if(this.inpValue=== "user"){
        console.log("inside user",this.inpValue);

        this.userService.registrationService(reqData).subscribe((response: any) => {
        console.log("registrstion response", response);

        this.snackbar.open("User Registrarion Successful !", '',{
          duration:200,
        })
        
      },error=>{
        console.log("error",error);
        
      })
        
      }else if(this.inpValue=== "admin"){
        console.log("inside admin",this.inpValue);

        this.adminService.registrationService(reqData).subscribe((response: any) => {
        console.log("registrstion response", response);

        this.snackbar.open("Admin Registrarion Successful !", '',{
          duration:200,
        })
        
      },error=>{
        console.log("error",error);
        
      })
        
      }
    
      // this.userService.registrationService(reqData).subscribe((response: any) => {
      //   console.log("registrstion response", response);

      //   this.snackbar.open("Registrarion Successful !", '',{
      //     duration:200,
      //   })
        
      // },error=>{
      //   console.log("error",error);
        
      // })

    }else{
      this.snackbar.open("Please fill the form !", '',{
        duration:200,
      })
    }
    
  }

}
