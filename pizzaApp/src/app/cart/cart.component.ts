import { Component ,OnInit} from '@angular/core';
import { PizzaService } from '../services/food/pizza.service';
import { RegisterService } from '../services/register.service';
import { Foods } from '../Models/food';
import { RouteService } from '../services/route.service';
import { pipe } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  foods:Foods[] = this.pizzaService.cartPizzas;
  totalAmount:number = 0;
  isOrderPlaced:boolean = false;
  snackBar: any;
  Quant:number = 1;
  price3:number =0;
   price1:number=0;
  constructor(public pizzaService:PizzaService, private registerService:RegisterService,private route:RouteService,private _snackBar: MatSnackBar) {}
   ngOnInit() {
    this.totalAmount = 0;
     this.pizzaService.cartPizzas.forEach((food:Foods) => {
       this.totalAmount += food.totalAmount!;
    // this.totalAmount += this.price1!;
        //this.totalAmount = this.Quantity*this.Pizzaprice;
      
           
    })
    
}
Quantity1(pizzaId:number,Pizza:Foods)
{
  // if(pizza.Quantity!=10)
  // {
  // pizza.Quantity +=1;
  // this.Quant = pizza.Quantity;

  // console.log(pizza.Quantity);
  // }
          // if(pizzaId==1)
          // {
          //  Pizza.Quantity +=1;
          //  this.Quant = Pizza.Quantity;
        
          // console.log(Pizza.Quantity);
          // }
        
        this.pizzaService.cartPizzas.forEach((food:Foods) => {
          if(pizzaId == food.pizzaId)
          {
            if(Pizza.Quantity!=10)
            {
            Pizza.Quantity +=1;
                this.Quant = Pizza.Quantity;
            
               console.log(Pizza.Quantity);
               Pizza.totalAmount = Pizza.pizzaPrice*this.Quant;
              // this.price1 = Pizza.pizzaPrice*this.Quant;
                this.ngOnInit()
               
              }
         
            
            }
              
       })
      }
   
// Quantity1(pizza:Foods,PizzaId:number):void
// {  
//   let index = this.foods.findIndex(mydata=>mydata.pizzaId === PizzaId)
//   if(index==PizzaId)
// {
//    this.Quantity = this.Quantity+1;
//    this.Pizzaprice = pizza.pizzaPrice*this.Quantity;
//    this.totalAmount = this.totalAmount;
  
   
//   }


order(){
     this.registerService.userDetails!.pizza = this.pizzaService.cartPizzas;
  this.pizzaService.registerUser(this.registerService.userDetails).subscribe(
    response=>{
      console.log(response);
      alert("order received");
      this.openSnack();
      alert("Order Placed SuccessFully")
      this.isOrderPlaced = true;
      this.pizzaService.cartPizzas = [];
      this.totalAmount = 0;
      this.route.navigateToOrderView();
    }
      )
    }
    // delete(Pizza:Foods){
    //   let pizza =  this.foods.indexOf(mypizza:Foods=>mypizza.m)
    //     // this.pizzaService.cartPizzas.forEach(X=>{
    //     //    if(X.pizzaId==Pizza)
    //     //    {
    //     //         this.pizzaService.cartPizzas.
    //     //    }
    //    // })
    //    console.log(pizzaItem);
    //    console.log(this.foods);
    //     alert("data Deleted");
    //   }
    delete(myPizza:Foods)
  {
     let index=this.foods.findIndex(mydata=>mydata.pizzaId===myPizza.pizzaId);
     if(index !==1)
     {
      this.foods.splice(index,1);
     }
     console.log(myPizza)
     this.totalAmount = this.totalAmount - myPizza.pizzaPrice;
     this.openSnackBar();
      alert("Delete Successfully")
 
      
      
  }
  openSnackBar() {
       this._snackBar.open("Delete Successfully", "Ok",{
         duration: 1000
  });
  
  }
    
  openSnack() {
    this._snackBar.open("Order Placed Successfully", "Ok",{
      duration: 1000
})};

}
