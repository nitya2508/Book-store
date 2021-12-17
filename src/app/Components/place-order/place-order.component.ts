import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService/data.service';
import { BookService } from 'src/app/service/bookService/book.service';
import { UserService } from 'src/app/service/userService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  // placeorderForm!:FormGroup;
  orderCount:any;
  subscription:any;
  message:any;
  bookArray:any;
  fullName:any;
  phone:any;
  adderss:any;
  city:any;
  state:any;
  i:any;
  submitted=false;
  isContinue=true;
  isOrdersummary=false;
  isPlaceorder=true;
  isCustDetails=false;
  orders:any;
  orderlist:any=[];
  arrayLength:any;

  constructor(private dataService: DataService, private bookService: BookService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getCartItems();
    this.dataService.changeBadgeData("true")
    // this.subscription = this.dataService.BookData.subscribe(message => {
    //   this.message = message;
    //   // console.log("display card search data======", message.data[0]);
     
    //   this.bookArray=message;
    //   // console.log("index",this.i);
    //   console.log("bookArray",this.bookArray[0].user_id.address);
    //   this.fullName=this.bookArray[0].user_id.fullName;
    //   this.phone=this.bookArray[0].user_id.phone;
    //   this.adderss=this.bookArray[0].user_id.address[0].fullAddress;
    //   this.city=this.bookArray[0].user_id.address[0].city;
    //   this.state=this.bookArray[0].user_id.address[0].state;
      
  // })
  // this.placeorderForm = this.formBuilder.group({
   
  //   fullAddress: ['', [Validators.required]],
  //   city: ['', [Validators.required]],
  //   state: ['', [Validators.required]],
  // })
  }
  getCartItems(){
    this.bookService.getCartItemService().subscribe((response:any) => {
      console.log("cart items ====",response.result);
      console.log("cart items ====",response.result[0]);
      this.bookArray=response.result;
      this.arrayLength=this.bookArray?.length;
      this.fullName=this.bookArray[0]?.user_id.fullName;
      this.phone=this.bookArray[0]?.user_id.phone;
      this.adderss=this.bookArray[0]?.user_id.address[0].fullAddress;
      this.city=this.bookArray[0]?.user_id.address[0].city;
      this.state=this.bookArray[0]?.user_id.address[0].state;

      
    })
  }

  placeorder(){
    this.isPlaceorder=false;
    this.isCustDetails=true;

  }

  countincrease() {
    this.orderCount += 1
    // this.updateCount()
  }
  
  countdecrease() {
    if (this.orderCount > 0) {
      this.orderCount -= 1;
      // this.updateCount()
    }
    else {
      return;
    }
  }

  deleteCartitem(book?:any){
    // console.log("delete cart book id",book?.product_id?._id);
    this.bookService.removeCartItenService(book?._id).subscribe((response:any)=>{
      console.log("delete msg",response);

      for (let i = 0; i < this.arrayLength; i++) {
        if (this.bookArray[i] == book) {
        this.bookArray?.splice(i, 1);
        }
        }
      
    })
  }
  order(){
    this.isOrdersummary=true;
  }

  onSubmit(){
    this.submitted=true;
    this.isContinue=false;
   this.isOrdersummary=true;
   console.log("address", this.adderss,this.city,this.state);
   

   let data = {
      addressType: "Home",
      fullAddress: this.adderss,
      city: this.city,
      state: this.state,
    }
    this.userService.updateaddress(data).subscribe((response:any)=>{
      console.log(response);
      
    })
  }

  orderplaced(){
    // console.log("orderplace====",book.product_id._id,book.product_id.bookName ,book.quantityToBuy, book.product_id.price);

    this.bookArray?.forEach((element: any) => {
      this.orderlist?.push(
        {
          "product_id": element?.product_id?._id,
          "product_name": element?.product_id?.bookName,
          "product_quantity": element?.quantityToBuy,
          "product_price": element?.product_id?.price - element?.product_id?.discountPrice
        }
      );
    });
    console.log(this.orderlist);
    
    let payload = {
      "orders": this.orderlist,
    }
    
  
    this.bookService.addOrder(payload).subscribe((response:any)=>{
      console.log("order response", response);
      this.route.navigateByUrl("/home/orderplaced")
      
    })
   }

}
