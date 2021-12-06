import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:LoginSignupComponent,
  children: [
    {path:'Sign-up',component:SignupComponent},
    {path:'login',component:LoginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
