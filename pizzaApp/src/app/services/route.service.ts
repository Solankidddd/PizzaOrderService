import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }
  navigateToLoginView() {
    this.router.navigate(["login"]);
  }

  navigateToHomeView() {
    this.router.navigate(["home"]);
  }

  navigateToCartView() {
    this.router.navigate(["cart"]);
  }
  navigateToOrderView() {
    this.router.navigate(["order"]);
  }
  navigateToRegisterView() {
    this.router.navigate([""]);
  }
}
