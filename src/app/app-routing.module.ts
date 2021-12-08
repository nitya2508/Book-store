import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:LoginSignupComponent,
  children: [
    {path:'Sign-up',component:SignupComponent},
    {path:'login',component:LoginComponent}
  ]
},

{path:'password-reset',component:ForgetPasswordComponent},

{path:'home',component:DashboardComponent, 
children: [
  {path:'books',component:GetAllBooksComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
