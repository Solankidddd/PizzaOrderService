import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Foods } from '../Models/food';
import { PizzaService } from '../services/food/pizza.service';
import { RegisterService } from '../services/register.service';
import { RouteService } from '../services/route.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 // currentRating:number = 0;
  foods:Foods[] = [];
  
 constructor(private ps : PizzaService,private rs:RegisterService,private routeService:RouteService,private Snackbar:MatSnackBar){}
  ngOnInit(): void {
     this.foods = this.ps.getAll()
  }
  addToCart(pizza: Foods) {
    this.ps.cartPizzas.push(pizza);
    console.log(this.ps.cartPizzas);
    this.openSnackBar();
    alert("data Added");
  }
  goToCart() {
    this.rs.loggedIn();
     this.routeService.navigateToCartView();
  }
  Logout()
  {
    this.rs.isLoggedIn = false;
   this.routeService.navigateToRegisterView();
  }
  openSnackBar() {
    this.Snackbar.open("Order added Successfully to cart", "Ok",{
      duration: 1000
})};
}
