import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Models/food';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NGB_DATEPICKER_18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient:HttpClient) { }
 
 cartPizzas: Array<Foods> = [];

  getAll():Foods[]
   {
          return[
             {
              pizzaId:1,
              pizzaPrice:50,
              name:' Onion Pizza',
              favourite: false,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/pizza 3.jpg',
              cookTime:'20-30 mins',
              origins:['India','U.S.A'],
              totalAmount:50
             },
             {
              pizzaId:2,
              pizzaPrice:45,
              name:'cheeze Pizza',
              favourite: false,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Breakfast'],
              imageURL:'/assets/Pizza 1.jpg',
              cookTime:'30-35 mins',
              origins:['Belgium','France'],
              totalAmount:45
             },
             {
              pizzaId:3,
              pizzaPrice:40,
              name:' Capsicum Pizza',
              favourite: false,
              star: 3,
              Quantity:1,
              tags:['Fast Food','Pizza','Dinner'],
              imageURL:'/assets/pizza 2.jpg',
              cookTime:'20-30 mins',
              origins:['India','U.K'],
              totalAmount:40

             },
             {
              pizzaId:4,
              pizzaPrice:60,
              name:'Paneer & Onion Pizza',
              favourite: true,
              star: 5,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/Pizza 4.jpg',
              cookTime:'40-45 mins',
              origins:['Spain','Italy'],
              totalAmount:60
             },
             {
              pizzaId:5,
              pizzaPrice:65,
              name:'Margherita Pizza',
              favourite: false,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/Pizza 5.jpg',
              cookTime:'30-35 mins',
              origins:['Canada','U.S.A'],
              totalAmount:65
             },
             {
              pizzaId:6,
              pizzaPrice:45,
              name:'Classic Corn',
              favourite: true,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/Pizza 6.jpg',
              cookTime:'20-25 mins',
              origins:['Germany','Netherlands'],
              totalAmount:45
             },
             {
              pizzaId:7,
              pizzaPrice:65,
              name:'Veggie Supreme',
              favourite: true,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/Pizza 7.jpg',
              cookTime:'25-30 mins',
              origins:['India','U.S>A'],
              totalAmount:65
             },
             {
              pizzaId:8,
              pizzaPrice:55.5,
              name:'Mexican Delight Pizza',
              favourite: false,
              star:3,
              Quantity:1,
              tags:['Fast Food','Pizza','Lunch'],
              imageURL:'/assets/Pizza 6.jpg',
              cookTime:'30-40 mins',
              origins:['Mexico','U.S.A'],
              totalAmount:55.5
             },
             {
              pizzaId:9,
              pizzaPrice:52.5,
              name:'Classic Sausage',
              favourite: false,
              star: 4,
              Quantity:1,
              tags:['Fast Food','Pizza','Dinner'],
              imageURL:'/assets/pizza 3.jpg',
              cookTime:'20-30 mins',
              origins:['Ireland','U.K'],
              totalAmount:52.5
             }

          ]
   }
   base_url:string="http://localhost:8084/api/pizzaservice";
   registerUser(data:any) {
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem("jwttoken")
    });
    
    let requestOption = {headers : httpHeaders}
    // call backend save controller method --> data to save
    alert("order added");
    return this.httpClient.post(this.base_url+"/user", data, requestOption);
    
  }
}
