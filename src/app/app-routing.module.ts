import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from './Components/book-display/book-display.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

import { AuthGuardGuard } from './Authguard/auth-guard.guard';

const routes: Routes = [
  {path:'', redirectTo:"signup/login", pathMatch:'full' },
  {path:'signup',component:LoginSignupComponent,
  children: [
    {path:'Sign-up',component:SignupComponent},
    {path:'login',component:LoginComponent}
  ]
},

{path:'password-reset',component:ForgetPasswordComponent},

{path:'home',component:DashboardComponent,canActivate:[AuthGuardGuard], 
children: [
  {path:'', redirectTo:"home/bookList", pathMatch:'full' },
  {path:'bookList',component:GetAllBooksComponent},
  {path:'book',component:BookDisplayComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
