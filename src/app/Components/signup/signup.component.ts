import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  SignupForm!:FormGroup;
  submitted:boolean=false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){

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
    
  }

}
