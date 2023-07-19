import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes : Routes =
[
    {path: 'home',component:HomeComponent,canActivate:[AuthGuard]}, 
    {path:"",component:RegisterFormComponent}, 
     {path:"login",component:LoginComponent},
     {path:"cart",component:CartComponent,canActivate:[AuthGuard]},
     {path:"order",component:OrderComponent}
   // {path:"**",component}  
        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
