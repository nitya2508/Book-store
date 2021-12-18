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
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { AdminBookListComponent } from './Components/admin-book-list/admin-book-list.component';

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
  {path:'book',component:BookDisplayComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'bookDetails',component:PlaceOrderComponent},
  {path:'orderplaced',component:OrderPlacedComponent},
  {path:'adminbookList',component:AdminBookListComponent}
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
